import square from "./square";

describe("square", () => {
  it("should square numbers", () => {
    const pairs: [number, number][] = [
      [0, 0],
      [1, 1],
      [-1, 1],
      [2, 4],
      [-2, 4],
      [13, 169],
    ];

    for (let [input, expectedValue] of pairs) {
      expect(square(input)).toBe(expectedValue);
    }
  });
});
