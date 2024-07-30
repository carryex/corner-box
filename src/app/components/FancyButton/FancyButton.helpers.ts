import { BaseCornerPosition, CornerType } from "../CornerBox/CornerBox.types"
import { BasicSize } from "./FancyButton.types"

export const getCornerConfig = (size: BasicSize): Omit<BaseCornerPosition, 'animation'> => {
  switch (size) {
    case BasicSize.Small:
      return ({
        topLeft: { type: CornerType.Angled, size: '0.45em' },
        topRight: { type: CornerType.Angled, size: '0.85em' },
        bottomRight: { type: CornerType.Angled, size: '0.45em' },
        bottomLeft: { type: CornerType.Angled, size: '0.85em' },
      })
    case BasicSize.Large:
      return ({
        topLeft: { type: CornerType.Angled, size: '0.75em' },
        topRight: { type: CornerType.Angled, size: '1.5em' },
        bottomRight: { type: CornerType.Angled, size: '0.75em' },
        bottomLeft: { type: CornerType.Angled, size: '1.5em' },
      })
    case BasicSize.Medium:
    default:
      return ({
        topLeft: { type: CornerType.Angled, size: '0.5em' },
        topRight: { type: CornerType.Angled, size: '1.25em' },
        bottomRight: { type: CornerType.Angled, size: '0.5em' },
        bottomLeft: { type: CornerType.Angled, size: '1.25em' },
      })
  }
}