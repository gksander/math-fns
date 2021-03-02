import clamp from "./clamp";

describe("clamp", () => {
  it("should return minimum value if input is less than min", () => {
    expect(clamp({ num: 3, min: 5, max: 10 })).toBe(5);
    expect(clamp({ num: -5, min: -3, max: -1 })).toBe(-3);
    expect(clamp({ num: -5, min: -1, max: 8 })).toBe(-1);
  });

  it("should return maximum value if input is more than max", () => {
    expect(clamp({ num: 13, min: 5, max: 10 })).toBe(10);
    expect(clamp({ num: -3, min: -20, max: -10 })).toBe(-10);
    expect(clamp({ num: 10, min: -1, max: 8 })).toBe(8);
  });

  it("should return input value if between min and max", () => {
    expect(clamp({ num: 8, min: 5, max: 10 })).toBe(8);
    expect(clamp({ num: -5, min: -10, max: -1 })).toBe(-5);
    expect(clamp({ num: 4, min: -1, max: 8 })).toBe(4);
  });

  it("should throw error if min > max", () => {
    expect(() => {
      clamp({ num: 4, min: 10, max: 8 });
    }).toThrow();
    expect(() => {
      clamp({ num: 4, min: -4, max: -10 });
    }).toThrow();
  });
});
