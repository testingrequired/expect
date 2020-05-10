import { toBeNull } from "./toBeNull";

describe("toBeNull", () => {
  it("should return passing assertion if undefined", () => {
    expect(toBeNull(null)).toEqual({
      value: null,
      pass: true,
      message: `is null`,
    });
  });

  it("should return passing assertion if not undefined", () => {
    const expected = "expectedValue";

    expect(toBeNull(expected)).toEqual({
      value: expected,
      pass: false,
      message: `is null`,
    });
  });
});
