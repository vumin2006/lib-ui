import React from "react";
import { typography } from "../../tokens";
import "./typography.css";

export interface ITypography {
  variant: "sm" | "base" | "lg" | "xl" | "h1" | "h2" | "h3" | "h4" | "h5";
  fontWeight: string;
}

const style = {
  sm: {
    fontSize: typography.fonts.size.sm,
    lineHeight: `${typography.lineHeights.sm}px`,
  },
  base: {
    fontSize: typography.fonts.size.base,
    lineHeight: `${typography.lineHeights.base}px`,
  },
  lg: {
    fontSize: typography.fonts.size.lg,
    lineHeight: `${typography.lineHeights.lg}px`,
  },
  xl: {
    fontSize: typography.fonts.size.xl,
    lineHeight: `${typography.lineHeights.xl}px`,
  },
  h1: {
    fontSize: typography.fonts.size.h1,
    lineHeight: `${typography.lineHeights.h1}px`,
  },
  h2: {
    fontSize: typography.fonts.size.h2,
    lineHeight: `${typography.lineHeights.h2}px`,
  },
  h3: {
    fontSize: typography.fonts.size.h3,
    lineHeight: `${typography.lineHeights.h3}px`,
  },
  h4: {
    fontSize: typography.fonts.size.h4,
    lineHeight: `${typography.lineHeights.h4}px`,
  },
  h5: {
    fontSize: typography.fonts.size.h5,
    lineHeight: `${typography.lineHeights.h5}px`,
  },
};

const Typography = ({ variant = "base", fontWeight }: ITypography) => {
  const styleFWeight = typography.fonts.weight[fontWeight];
  const mergeStyle = { ...style[variant], fontWeight: styleFWeight };

  return (
    <div style={{ ...mergeStyle }}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
    </div>
  );
};

export default Typography;
