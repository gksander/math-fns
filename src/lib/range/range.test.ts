import range from "./range";

describe("range", () => {
  it("should return 0...n-1 when passed n", () => {
    expect(range(1)).toEqual([0]);
    expect(range(4)).toEqual([0, 1, 2, 3]);

    const bigRangeMax = 1024;
    const bigRange = range(bigRangeMax);
    expect(bigRange.length).toBe(bigRangeMax);
    expect(bigRange[0]).toBe(0);
    expect(bigRange[bigRange.length - 1]).toBe(bigRangeMax - 1);
  });

  it("should throw if passed n < 1", () => {
    expect(() => {
      range(0);
    }).toThrow();
    expect(() => {
      range(-1);
    }).toThrow();
    expect(() => {
      range(-10);
    }).toThrow();
  });

  it("should include start and stop values when step = 1", () => {
    const values1 = range({ start: 3, stop: 10 });
    expect(values1[0]).toBe(3);
    expect(values1[values1.length - 1]).toBe(10);

    const values2 = range({ start: -10, stop: 23 });
    expect(values2[0]).toBe(-10);
    expect(values2[values2.length - 1]).toBe(23);
  });

  it("should allow for step sizes other than 1", () => {
    const values = range({ start: 0, stop: 9, step: 0.2 });
    expect(values[0]).toBe(0);
    expect(values[1]).toBeCloseTo(0.2);
    expect(values[values.length - 2]).toBeCloseTo(8.8);
    expect(values[values.length - 1]).toBeCloseTo(9);
  });
});
