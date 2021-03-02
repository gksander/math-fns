import radToDegrees from "./radToDegrees";
import degreesToRad from "./degreesToRad";

describe("radToDegrees", () => {
  it("converts radians to degrees as expected", () => {
    const pi = Math.PI;
    const pairs = [
      [0, 0],
      [pi / 4, 45],
      [pi / 2, 90],
      [pi, 180],
      [(3 * pi) / 2, 270],
      [2 * pi, 360],
      [1, 57.296],
    ];

    for (let [rad, deg] of pairs) {
      expect(degreesToRad(deg)).toBeCloseTo(rad);
    }
  });
});
