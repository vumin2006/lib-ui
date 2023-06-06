type BorderRadius = Readonly<{
  none: 0;
  xs: 2;
  sm: 4;
  lg: 8;
  max: 9999;
  round: "50%";
}>;

type BorderWidth = Readonly<{
  none: 0;
  thin: 1;
}>;

export type BorderProps = Readonly<{
  radius: BorderRadius;
  width: BorderWidth;
}>;

const border: BorderProps = {
  radius: {
    none: 0,
    xs: 2,
    sm: 4,
    lg: 8,
    max: 9999,
    round: "50%",
  },
  width: {
    none: 0,
    thin: 1,
  },
};

export default border;
