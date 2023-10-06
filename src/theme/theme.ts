import { typography } from "./defaults/typography";
import { colors } from "./defaults/colors";

const Theme = {
    typography,
    colors
}

export type theme = typeof Theme;
export type themeTypographyVariants = keyof typeof typography.variants;

export default Theme;
