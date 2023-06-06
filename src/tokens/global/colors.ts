export type ColorCommonProps = Readonly<{
  textBase: string;
  textLightSolid: string;
  bgBase: string;
  primary: string;
  secondary: string;
  error: string;
  warning: string;
  success: string;
  info: string;
}>;

export type ColorDefaultProps = Readonly<{
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
}>;

export type ColorProps = Readonly<{
  blue: ColorDefaultProps;
  purple: ColorDefaultProps;
  cyan: ColorDefaultProps;
  green: ColorDefaultProps;
  magenta: ColorDefaultProps;
  red: ColorDefaultProps;
  orange: ColorDefaultProps;
  yellow: ColorDefaultProps;
  volcano: ColorDefaultProps;
  geekblue: ColorDefaultProps;
  lime: ColorDefaultProps;
  gold: ColorDefaultProps;
}>;

const colors: ColorProps = {
  blue: {
    "1": "#e6f4ff",
    "2": "#bae0ff",
    "3": "#91caff",
    "4": "#69b1ff",
    "5": "#4096ff",
    "6": "#1677ff",
    "7": "#0958d9",
    "8": "#003eb3",
    "9": "#002c8c",
    "10": "#001d66",
  },
  purple: {
    "1": "#f9f0ff",
    "2": "#efdbff",
    "3": "#d3adf7",
    "4": "#b37feb",
    "5": "#9254de",
    "6": "#722ed1",
    "7": "#531dab",
    "8": "#391085",
    "9": "#22075e",
    "10": "#120338",
  },
  cyan: {
    "1": "#e6fffb",
    "2": "#b5f5ec",
    "3": "#87e8de",
    "4": "#5cdbd3",
    "5": "#36cfc9",
    "6": "#13c2c2",
    "7": "#08979c",
    "8": "#006d75",
    "9": "#00474f",
    "10": "#002329",
  },
  green: {
    "1": "#f6ffed",
    "2": "#d9f7be",
    "3": "#b7eb8f",
    "4": "#95de64",
    "5": "#73d13d",
    "6": "#52c41a",
    "7": "#389e0d",
    "8": "#237804",
    "9": "#135200",
    "10": "#092b00",
  },
  magenta: {
    "1": "#fff0f6",
    "2": "#ffd6e7",
    "3": "#ffadd2",
    "4": "#ff85c0",
    "5": "#f759ab",
    "6": "#eb2f96",
    "7": "#c41d7f",
    "8": "#9e1068",
    "9": "#780650",
    "10": "#520339",
  },
  red: {
    "1": "#fff1f0",
    "2": "#ffccc7",
    "3": "#ffa39e",
    "4": "#ff7875",
    "5": "#ff4d4f",
    "6": "#f5222d",
    "7": "#cf1322",
    "8": "#a8071a",
    "9": "#820014",
    "10": "#5c0011",
  },
  orange: {
    "1": "#fff7e6",
    "2": "#ffe7ba",
    "3": "#ffd591",
    "4": "#ffc069",
    "5": "#ffa940",
    "6": "#fa8c16",
    "7": "#d46b08",
    "8": "#ad4e00",
    "9": "#873800",
    "10": "#612500",
  },
  yellow: {
    "1": "#feffe6",
    "2": "#ffffb8",
    "3": "#fffb8f",
    "4": "#fff566",
    "5": "#ffec3d",
    "6": "#fadb14",
    "7": "#d4b106",
    "8": "#ad8b00",
    "9": "#876800",
    "10": "#614700",
  },
  volcano: {
    "1": "#fff2e8",
    "2": "#ffd8bf",
    "3": "#ffbb96",
    "4": "#ff9c6e",
    "5": "#ff7a45",
    "6": "#fa541c",
    "7": "#d4380d",
    "8": "#ad2102",
    "9": "#871400",
    "10": "#610b00",
  },
  geekblue: {
    "1": "#f0f5ff",
    "2": "#d6e4ff",
    "3": "#adc6ff",
    "4": "#85a5ff",
    "5": "#597ef7",
    "6": "#2f54eb",
    "7": "#1d39c4",
    "8": "#10239e",
    "9": "#061178",
    "10": "#030852",
  },
  lime: {
    "1": "#fcffe6",
    "2": "#f4ffb8",
    "3": "#eaff8f",
    "4": "#d3f261",
    "5": "#bae637",
    "6": "#a0d911",
    "7": "#7cb305",
    "8": "#5b8c00",
    "9": "#3f6600",
    "10": "#254000",
  },
  gold: {
    "1": "#fffbe6",
    "2": "#fff1b8",
    "3": "#ffe58f",
    "4": "#ffd666",
    "5": "#ffc53d",
    "6": "#faad14",
    "7": "#d48806",
    "8": "#ad6800",
    "9": "#874d00",
    "10": "#613400",
  },
};

export default colors;

export const colorCommon: ColorCommonProps = {
  textBase: "#000",
  textLightSolid: "#ffffff",
  bgBase: "#ffffff",
  primary: "#050038",
  secondary: "#F7CD48",
  error: "#ff4d4f",
  warning: "#faad14",
  success: "#52c41a",
  info: "#050038",
};
