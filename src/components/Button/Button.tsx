import React from "react";
import "./button.css";
import { colors, typography, colorCommon, spacing, border } from "../../tokens";

export interface ButtonProps {
  variant?: "primary" | "default" | "danger";
  size?: "small" | "default" | "large";
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const styleSize = {
  small: {
    height: "22px",
    fontSize: typography.fonts.size.base,
    fontWeight: typography.fonts.weight.normal,
  },
  default: {
    height: "40px",
    fontSize: typography.fonts.size.base,
    fontWeight: typography.fonts.weight.normal,
  },
  large: {
    height: "48px",
    fontSize: typography.fonts.size.base,
    fontWeight: typography.fonts.weight.medium,
  },
};

const styleType = {
  default: {
    backgroundColor: colorCommon.bgBase,
    color: colorCommon.textBase,
    borderRadius: border.radius.xs,
  },
  primary: {
    backgroundColor: colorCommon.primary,
    color: colorCommon.secondary,
    borderRadius: border.radius.xs,
  },
  danger: {
    backgroundColor: colorCommon.error,
    color: colorCommon.textLightSolid,
    borderRadius: border.radius.xs,
  },
};
const Button = ({
  variant = "default",
  size = "default",
  onClick,
  label,
}: ButtonProps) => {
  const mergeStyle = { ...styleType[variant], ...styleSize[size] };
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ ...mergeStyle, outline: "none", border: 0, padding: "0 16px" }}
    >
      {label}
    </button>
  );
};

export default Button;
