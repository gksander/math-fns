const magnitude = (vector: number[]): number => {
  const componentSums = vector.reduce(
    (sum, comp) => sum + Math.pow(comp, 2),
    0,
  );
  return Math.sqrt(componentSums);
};

export default magnitude;
