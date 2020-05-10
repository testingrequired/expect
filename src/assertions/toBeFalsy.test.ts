import { toBeFalsy } from "./toBeFalsy";

describe("toBeFalsy", () => {
  it("should return passing assertion if false", () => {
    expect(toBeFalsy(false)).toEqual({
      value: false,
      pass: true,
      message: `is falsy`,
    });
  });

  it("should return failing assertion if not false", () => {
    expect(toBeFalsy(true)).toEqual({
      value: true,
      pass: false,
      message: `is falsy`,
    });
  });

  it("should return passing assertion if falsy", () => {
    expect(toBeFalsy(0)).toEqual({
      value: 0,
      pass: true,
      message: `is falsy`,
    });
  });
});
