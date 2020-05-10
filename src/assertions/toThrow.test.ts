import { toThrow } from "./toThrow";

describe("toThrow", () => {
  describe("when called with no arguments", () => {
    it("should return passing assertion if function throws", () => {
      const expectedFn = () => {
        throw new Error();
      };

      expect(toThrow()(expectedFn)).toEqual({
        value: expectedFn,
        pass: true,
        message: `to throw`,
      });
    });

    it("should return failing assertion if function doesn't throws", () => {
      const expectedFn = () => {};

      expect(toThrow()(expectedFn)).toEqual({
        value: expectedFn,
        pass: false,
        message: `to throw`,
      });
    });
  });

  describe("when called with an expected error message", () => {
    it("should return passing assertion if matches error message", () => {
      const expectedErrorMessage = "expectedErrorMessage";
      const expectedFn = () => {
        throw new Error(expectedErrorMessage);
      };

      expect(toThrow(expectedErrorMessage)(expectedFn)).toEqual({
        value: expectedFn,
        pass: true,
        message: `to throw "${expectedErrorMessage}"`,
      });
    });

    it("should return failing assertion if doesn't match error message", () => {
      const expectedErrorMessage = "expectedErrorMessage";
      const expectedFn = () => {
        throw new Error();
      };

      expect(toThrow(expectedErrorMessage)(expectedFn)).toEqual({
        value: expectedFn,
        pass: false,
        message: `to throw "${expectedErrorMessage}"`,
      });
    });
  });

  describe("when called with an expected error class and message", () => {
    it("should return passing assertion if matches error class and message", () => {
      class CustomError extends Error {}

      const expectedErrorMessage = "expectedErrorMessage";
      const expectedFn = () => {
        throw new CustomError(expectedErrorMessage);
      };

      expect(
        toThrow(new CustomError(expectedErrorMessage))(expectedFn)
      ).toEqual({
        value: expectedFn,
        pass: true,
        message: `to throw CustomError("${expectedErrorMessage}")`,
      });
    });

    it("should return failing assertion if doesn't match error class", () => {
      class CustomError extends Error {}

      const expectedErrorMessage = "expectedErrorMessage";
      const expectedFn = () => {
        throw new CustomError(expectedErrorMessage);
      };

      expect(toThrow(new Error(expectedErrorMessage))(expectedFn)).toEqual({
        value: expectedFn,
        pass: false,
        message: `to throw Error("${expectedErrorMessage}")`,
      });
    });

    it("should return failing assertion if doesn't match error message", () => {
      class CustomError extends Error {}

      const expectedErrorMessage = "expectedErrorMessage";
      const expectedFn = () => {
        throw new CustomError();
      };

      expect(
        toThrow(new CustomError(expectedErrorMessage))(expectedFn)
      ).toEqual({
        value: expectedFn,
        pass: false,
        message: `to throw CustomError("${expectedErrorMessage}")`,
      });
    });
  });
});
