import distance2D from "./distance2D";

describe("distance2D", () => {
  it("should compute distance", () => {
    const pairs: [[number, number], [number, number], number][] = [
      [[0, 0], [0, 1], 1],
      [[0, 0], [1, 1], 1.414213562],
      [[4, 3], [3, -2], 5.099],
    ];

    for (let [p1, p2, expectedDistance] of pairs) {
      expect(
        distance2D({ x: p1[0], y: p1[1] }, { x: p2[0], y: p2[1] }),
      ).toBeCloseTo(expectedDistance);
    }
  });
});
