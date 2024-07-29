import { CornerPosition, CornerType } from "./CornerBox.types";

const CURVE_SEGMENT_COUNT = 16;
const STEP = Math.PI / CURVE_SEGMENT_COUNT;

const DECIMAL_PLACES = 3;



const generateRoundedCorner = (radius: string, position: CornerPosition) => {
  const r = parseFloat(radius);
  const points = [];

  for (let i = 0; i <= Math.PI / 2; i += STEP) {
    let x, y;
    switch (position) {
      case CornerPosition.LeftTop:
        x = r * Math.cos(i);
        y = r * Math.sin(i);
        points.push(`${x.toFixed(DECIMAL_PLACES)}em ${y.toFixed(DECIMAL_PLACES)}em`);
        break;
      case CornerPosition.LeftBottom:
        x = r * Math.cos(i);
        y = r * Math.sin(i);
        points.unshift(`${x.toFixed(DECIMAL_PLACES)}em calc(100% - ${y.toFixed(DECIMAL_PLACES)}em)`);
        break;
      case CornerPosition.RightBottom:
        x = r * Math.cos(i);
        y = r * Math.sin(i);
        points.push(`calc(100% - ${x.toFixed(DECIMAL_PLACES)}em) calc(100% - ${y.toFixed(DECIMAL_PLACES)}em)`);
        break;
      case CornerPosition.RightTop:
        x = r * Math.cos(i);
        y = r * Math.sin(i);
        points.unshift(`calc(100% - ${x.toFixed(DECIMAL_PLACES)}em) ${y.toFixed(DECIMAL_PLACES)}em`);
        break;
    }
  }
  return points.join(', ');
};

const getCornerShape = (cornerType: CornerType, size: string, position: CornerPosition) => {
  switch (cornerType) {
    case CornerType.Angled:
      switch (position) {
        case CornerPosition.LeftTop:
          return `${size} 0, 0 ${size}`;
        case CornerPosition.LeftBottom:
          return `0 calc(100% - ${size}), ${size} 100%`;
        case CornerPosition.RightBottom:
          return `calc(100% - ${size}) 100%, 100% calc(100% - ${size})`;
        case CornerPosition.RightTop:
          return `100% ${size}, calc(100% - ${size}) 0`;
      }
    case CornerType.Boxed:
      switch (position) {
        case CornerPosition.LeftTop:
          return `${size} 0, ${size} ${size}, 0 ${size}`;
        case CornerPosition.LeftBottom:
          return `0 calc(100% - ${size}), ${size} calc(100% - ${size}), ${size} 100%`;
        case CornerPosition.RightBottom:
          return `calc(100% - ${size}) 100%, calc(100% - ${size}) calc(100% - ${size}), 100% calc(100% - ${size})`;
        case CornerPosition.RightTop:
          return `100% ${size}, calc(100% - ${size}) ${size}, calc(100% - ${size}) 0`;
      }
    case CornerType.Rounded:
      return generateRoundedCorner(size, position);
    case CornerType.Square:
    default:
      switch (position) {
        case CornerPosition.LeftTop:
          return `0 0`;
        case CornerPosition.LeftBottom:
          return `0 100%`;
        case CornerPosition.RightBottom:
          return `100% 100%`;
        case CornerPosition.RightTop:
          return `100% 0`;
      }
  }
};

export const cornerStyle = (topLeft: CornerType, topRight: CornerType, bottomRight: CornerType, bottomLeft: CornerType, size: string) => {
  const topLeftCornerShape = getCornerShape(topLeft, size, CornerPosition.LeftTop);
  const bottomLeftCornerShape = getCornerShape(bottomLeft, size, CornerPosition.LeftBottom);
  const bottomRightCornerShape = getCornerShape(bottomRight, size, CornerPosition.RightBottom);
  const topRightCornerShape = getCornerShape(topRight, size, CornerPosition.RightTop);

  const topLeftCornerInitialShape = topLeftCornerShape.split(',').map(() => '0 0').join(', ');
  const bottomLeftCornerInitialShape = bottomLeftCornerShape.split(',').map(() => '0 100%').join(', ');
  const bottomRightCornerInitialShape = bottomRightCornerShape.split(',').map(() => '100% 100%').join(', ');
  const topRightCornerInitialShape = topRightCornerShape.split(',').map(() => '100% 0').join(', ');

  const finalClipPath = `polygon(
    ${topLeftCornerShape},
    ${bottomLeftCornerShape},
    ${bottomRightCornerShape},
    ${topRightCornerShape}
  )`

  const initialClipPath = `polygon(
    ${topLeftCornerInitialShape},
    ${bottomLeftCornerInitialShape},
    ${bottomRightCornerInitialShape},
    ${topRightCornerInitialShape}
  )`

  return { finalClipPath, initialClipPath };
};