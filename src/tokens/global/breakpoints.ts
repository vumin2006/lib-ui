export type BreakpointsProps = Readonly<{
  /** max width: 320px  */
  xs: number;
  /** min width: 321px and max width: 480px */
  sm: number;
  /** min width: 481px and max width: 768px */
  md: number;
  /** min width: 769 and max width: 1024px */
  lg: number;
  /** min width: 1025 and max width: 1200px */
  xl: number;
  /** min width: 1201px  */
  max: number;
}>;

const breakpoints: BreakpointsProps = {
  xs: 320,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1200,
  max: 1201,
};

export default breakpoints;
