import { toBeUndefined } from "./toBeUndefined";

describe("toBeUndefined", () => {
  it("should return passing assertion if undefined", () => {
    expect(toBeUndefined(undefined)).toEqual({
      value: undefined,
      pass: true,
      message: `is undefined`,
    });
  });

  it("should return passing assertion if not undefined", () => {
    const expected = "expectedValue";

    expect(toBeUndefined(expected)).toEqual({
      value: expected,
      pass: false,
      message: `is undefined`,
    });
  });
});
