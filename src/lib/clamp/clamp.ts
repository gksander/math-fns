const clamp = ({
  num,
  min,
  max,
}: {
  num: number;
  min: number;
  max: number;
}): number => {
  if (min > max) throw new Error("Min cannot be greater than max");

  if (num < min) return min;
  if (num > max) return max;
  return num;
};

export default clamp;
