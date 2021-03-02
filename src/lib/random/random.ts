const random = ({
  min = 0,
  max = 1,
}: { min?: number; max?: number } = {}): number => {
  if (min > max) throw new Error("min cannot be greater than max");

  return min + Math.random() * (max - min);
};

export default random;
