import {ThemeType} from "../Typescript/Types";
import {
  COLOR_BLACK,
  COLOR_DANGER,
  COLOR_GRAY,
  COLOR_IMPORTANT,
  COLOR_INFO,
  COLOR_MUTED,
  COLOR_PRIMARY,
  COLOR_SUCCESS,
  COLOR_WARNING,
  COLOR_WHITE
} from "../../native-base-theme/variables/config";

export function colorMap(p: ThemeType): string | null {
  switch (p) {
    case "warning":
      return COLOR_WARNING;
    case "success":
      return COLOR_SUCCESS;
    case "danger":
      return COLOR_DANGER;
    case "info":
      return COLOR_INFO;
    case "primary":
      return COLOR_PRIMARY;
    case "important":
      return COLOR_IMPORTANT;
    case "black":
      return COLOR_BLACK;
    case "white":
      return COLOR_WHITE;
    case "gray":
      return COLOR_GRAY;
    case "muted":
      return COLOR_MUTED;
    default:
      return null;
  }
}
