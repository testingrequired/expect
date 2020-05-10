import { toBeTrue } from "./toBeTrue";

describe("toBeTrue", () => {
  it("should return passing assertion if true", () => {
    expect(toBeTrue(true)).toEqual({
      value: true,
      pass: true,
      message: `is true`,
    });
  });

  it("should return failing assertion if not true", () => {
    expect(toBeTrue(false)).toEqual({
      value: false,
      pass: false,
      message: `is true`,
    });
  });

  it("should return failing assertion if truthy", () => {
    expect(toBeTrue(1)).toEqual({
      value: 1,
      pass: false,
      message: `is true`,
    });
  });

  it("should return failing assertion if falsy", () => {
    expect(toBeTrue(0)).toEqual({
      value: 0,
      pass: false,
      message: `is true`,
    });
  });
});
