import Button from "./components/Button";
import { colorCommon, colors } from "./tokens";

const COLORS = {
  light: { ...colors, ...colorCommon },
  dark: { bgBase: "#000", textBase: "#fff" },
};

export { Button, COLORS };
