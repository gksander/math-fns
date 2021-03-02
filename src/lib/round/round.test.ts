import round from "./round";
import { ceil, floor } from "../../index";

describe("round", () => {
  it("rounds to whole number", () => {
    expect(round({ num: 39.2 })).toBe(39);
    expect(round({ num: 39.5 })).toBe(40);
    expect(round({ num: 39.6 })).toBe(40);

    expect(round({ num: -34.2 })).toBe(-34);
    expect(round({ num: -34.5 })).toBe(-34);
    expect(round({ num: -34.6 })).toBe(-35);
  });

  it("can round to 1 decimal place", () => {
    expect(round({ num: 39.2132, numDecimals: 1 })).toBe(39.2);
    expect(round({ num: Math.PI, numDecimals: 1 })).toBe(3.1);
  });

  it("can round to 4 decimal places", () => {
    expect(round({ num: Math.PI, numDecimals: 4 })).toBe(3.1416);
  });

  it("can round to 10s place", () => {
    expect(round({ num: 143, numDecimals: -1 })).toBe(140);
    expect(round({ num: 147, numDecimals: -1 })).toBe(150);
    expect(round({ num: -32.23, numDecimals: -1 })).toBe(-30);
  });

  it("can round down with floor", () => {
    expect(round({ num: 24.9 })).toBe(25);
    expect(round({ num: 24.9, truncator: floor })).toBe(24);

    expect(round({ num: 28.9, numDecimals: -1 })).toBe(30);
    expect(round({ num: 28.9, numDecimals: -1, truncator: floor })).toBe(20);
  });

  it("can round up with ceil", () => {
    expect(round({ num: 24.2 })).toBe(24);
    expect(round({ num: 24.2, truncator: ceil })).toBe(25);

    expect(round({ num: 23.9, numDecimals: -1 })).toBe(20);
    expect(round({ num: 23.9, numDecimals: -1, truncator: ceil })).toBe(30);
  });
});
