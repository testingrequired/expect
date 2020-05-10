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
});
