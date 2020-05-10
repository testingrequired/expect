import { toBeInstanceOf } from "./toBeInstanceOf";

describe("toBeInstanceOf", () => {
  it("should return passing assertion if instance of", () => {
    const error = new Error();

    expect(toBeInstanceOf(Error)(error)).toEqual({
      value: error,
      pass: true,
      message: `is instanceof Error`,
    });
  });

  it("should return passing assertion if instance of subclass", () => {
    class CustomError extends Error {}

    const error = new CustomError();

    expect(toBeInstanceOf(Error)(error)).toEqual({
      value: error,
      pass: true,
      message: `is instanceof Error`,
    });
  });

  it("should return passing assertion if instance of", () => {
    expect(toBeInstanceOf(String)(100)).toEqual({
      value: 100,
      pass: false,
      message: `is instanceof String`,
    });
  });
});
