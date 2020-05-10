import { toBeTruthy } from "./toBeTruthy";

describe("toBeTruthy", () => {
  it("should return passing assertion if true", () => {
    expect(toBeTruthy(true)).toEqual({
      value: true,
      pass: true,
      message: `is truthy`,
    });
  });

  it("should return failing assertion if not true", () => {
    expect(toBeTruthy(false)).toEqual({
      value: false,
      pass: false,
      message: `is truthy`,
    });
  });

  it("should return failing assertion if truthy", () => {
    expect(toBeTruthy(1)).toEqual({
      value: 1,
      pass: true,
      message: `is truthy`,
    });
  });

  it("should return failing assertion if falsy", () => {
    expect(toBeTruthy(0)).toEqual({
      value: 0,
      pass: false,
      message: `is truthy`,
    });
  });
});
