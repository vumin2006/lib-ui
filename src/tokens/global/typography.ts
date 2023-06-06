import fontFamily, { FontFamilyProps } from "./fontFamily";

export type FontWeightProps = {
  normal: 400;
  medium: 500;
  semibold: 600;
  bold: 700;
};

export type FontSizeProps = {
  sm: number;
  base: number;
  lg: number;
  xl: number;
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
};

export type LineHeightsProps = {
  sm: number;
  base: number;
  lg: number;
  xl: number;
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
};

export type TypographyProps = {
  fonts: {
    family: FontFamilyProps;
    size: FontSizeProps;
    weight: FontWeightProps;
  };
  lineHeights: LineHeightsProps;
  letterSpacings?: {
    //TODO
  };
};

const fontWeight: FontWeightProps = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

const fontSize: FontSizeProps = {
  sm: 12,
  base: 14,
  lg: 16,
  xl: 20,
  h1: 38,
  h2: 30,
  h3: 24,
  h4: 20,
  h5: 16,
};

const typography: TypographyProps = {
  fonts: {
    family: { ...fontFamily },
    size: { ...fontSize },
    weight: { ...fontWeight },
  },
  lineHeights: {
    sm: 20,
    base: 22,
    lg: 24,
    xl: 28,
    h1: 46,
    h2: 38,
    h3: 32,
    h4: 28,
    h5: 24,
  },
  letterSpacings: {
    // TODO
  },
};

export default typography;
