import { toBe } from "./toBe";

describe("toBe", () => {
  it("should return passing assertion if values match", () => {
    const expected = {};
    const actual = expected;

    expect(toBe(expected)(actual)).toEqual({
      value: actual,
      pass: true,
      message: `{} is {}`,
    });
  });

  it("should return failing assertion if values don't match", () => {
    const expected = {};
    const actual = {};

    expect(toBe(expected)(actual)).toEqual({
      value: actual,
      pass: false,
      message: `{} is {}`,
    });
  });
});
