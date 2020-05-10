import { toBeFalse } from "./toBeFalse";

describe("toBeFalse", () => {
  it("should return passing assertion if false", () => {
    expect(toBeFalse(false)).toEqual({
      value: false,
      pass: true,
      message: `is false`,
    });
  });

  it("should return failing assertion if not false", () => {
    expect(toBeFalse(true)).toEqual({
      value: true,
      pass: false,
      message: `is false`,
    });
  });

  it("should return failing assertion if falsy", () => {
    expect(toBeFalse(0)).toEqual({
      value: 0,
      pass: false,
      message: `is false`,
    });
  });
});
