const range = (args: number | ConfigurableRangeInput): number[] => {
  return typeof args === "number"
    ? configurableRange({ start: 0, stop: args - 1, step: 1 })
    : configurableRange(args);
};

const configurableRange = ({
  start,
  stop,
  step = 1,
}: ConfigurableRangeInput): number[] => {
  if (start > stop) throw new Error("stop must be greater than start");

  const values = [];
  for (let x = start; x <= stop; x += step) {
    values.push(x);
  }

  return values;
};

type ConfigurableRangeInput = { start: number; stop: number; step?: number };

export default range;
