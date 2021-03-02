import random from "./random";
import range from "./range";

// TODO: Consider setting seed for random generator for more consistent results?
describe("random", () => {
  it("defaults to random number between 0 and 1", () => {
    range(100).forEach(() => {
      const val = random();
      expect(val).toBeGreaterThanOrEqual(0);
      expect(val).toBeLessThanOrEqual(1);
    });
  });

  it("throws error if min > max", () => {
    expect(() => {
      random({ min: 2, max: 1 });
    }).toThrow();
  });

  it("generates random number between min and max", () => {
    const pairs = [
      [1, 10],
      [-20, -5],
      [-5, 5],
    ];

    for (let pair of pairs) {
      range(100).forEach(() => {
        const [min, max] = pair;
        const val = random({ min, max });
        expect(val).toBeGreaterThanOrEqual(min);
        expect(val).toBeLessThanOrEqual(max);
      });
    }
  });
});
