const round = ({
  num,
  numDecimals = 0,
  truncator = Math.round,
}: {
  num: number;
  numDecimals?: number;
  truncator?: (x: number) => number;
}) => {
  return truncator(num * Math.pow(10, numDecimals)) / Math.pow(10, numDecimals);
};

export default round;
