import { toBeNull } from "./toBeNull";

describe("toBeNull", () => {
  it("should return passing assertion if null", () => {
    expect(toBeNull(null)).toEqual({
      value: null,
      pass: true,
      message: `is null`,
    });
  });

  it("should return passing assertion if not null", () => {
    const expected = "expectedValue";

    expect(toBeNull(expected)).toEqual({
      value: expected,
      pass: false,
      message: `is null`,
    });
  });
});
