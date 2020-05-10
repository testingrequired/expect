import { toEqual } from "./toEqual";

describe("toEqual", () => {
  it("should return passing assertion if values match", () => {
    const expected = "expectedValue";
    const actual = expected;

    expect(toEqual(expected)(actual)).toEqual({
      value: actual,
      pass: true,
      message: `"expectedValue" === "expectedValue"`,
    });
  });

  it("should return failing assertion if values don't match", () => {
    const expected = "expectedValue";
    const actual = "actualValue";

    expect(toEqual(expected)(actual)).toEqual({
      value: actual,
      pass: false,
      message: `"actualValue" === "expectedValue"`,
    });
  });

  it("should return passing assertion if objects containing same keys/values", () => {
    const expected = { foo: "bar" };
    const actual = { foo: "bar" };

    expect(toEqual(expected)(actual)).toEqual({
      value: actual,
      pass: true,
      message: `{"foo":"bar"} === {"foo":"bar"}`,
    });
  });

  it("should return passing assertion if arrays containing same values", () => {
    const expected = [1, 2, 3];
    const actual = [1, 2, 3];

    expect(toEqual(expected)(actual)).toEqual({
      value: actual,
      pass: true,
      message: `[1,2,3] === [1,2,3]`,
    });
  });
});
