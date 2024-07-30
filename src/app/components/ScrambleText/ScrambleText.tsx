import React, { useState, useEffect, useCallback, useRef } from "react";

interface ScrambleTextProps {
  children: string;
  scrambleDuration?: number;
  scrambleInterval?: number;
  className?: string;
  style?: React.CSSProperties;
  scrambleOnMount?: boolean;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({
  children,
  scrambleDuration = 1000,
  scrambleInterval = 50,
  className = "",
  style = {},
  scrambleOnMount = false,
}) => {
  const textContent = children.replace(/\n/g, "\u00A0\n");
  const [displayText, setDisplayText] = useState(textContent);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<number | null>(null);
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  const scrambleText = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsedTime = currentTime - startTime;

      const progress = Math.min(elapsedTime / scrambleDuration, 1);
      const revealLength = Math.floor(progress * textContent.length);

      setDisplayText(
        (prevText) =>
          textContent.slice(0, revealLength) +
          Array(textContent.length - revealLength)
            .fill(0)
            .map((_, i) => {
              const char = textContent[revealLength + i];
              return char === "\n" || char === "\u00A0"
                ? char
                : characters[Math.floor(Math.random() * characters.length)];
            })
            .join(""),
      );

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayText(textContent);
        setIsAnimating(false);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [textContent, scrambleDuration, isAnimating]);

  useEffect(() => {
    if (scrambleOnMount) {
      scrambleText();
    }
  }, []); // Run once on mount

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (!isAnimating) {
      scrambleText();
    }
  };

  return (
    <span
      className={`${className} cursor-pointer`}
      style={style}
      onMouseEnter={handleMouseEnter}
    >
      {displayText.split("\n").map((line, lineIndex) => (
        <React.Fragment key={lineIndex}>
          {lineIndex > 0 && <br />}
          {line.split("").map((char, charIndex) => {
            const originalChar = textContent.split("\n")[lineIndex][charIndex];
            return (
              <span
                key={charIndex}
                style={{
                  opacity: char !== originalChar ? 0.5 : 1,
                }}
              >
                {char === "\u00A0" ? " " : char}
              </span>
            );
          })}
        </React.Fragment>
      ))}
    </span>
  );
};

export default ScrambleText;