import magnitude from "./magnitude";

describe("magnitude", () => {
  it("computes magnitude of vectors of various dimensions", () => {
    const pairs: [number[], number][] = [
      [[0, 0], 0],
      [[1, 1], 1.4142135],
      [[-3, 5], 5.83095189485],
      [[-3, -8], 8.54400374532],
      [[1, 2, 3], 3.74165738677],
    ];

    for (let [vector, expectedMagnitude] of pairs) {
      expect(magnitude(vector)).toBeCloseTo(expectedMagnitude);
    }
  });
});
