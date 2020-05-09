import { toEqual, Assertion, not, toBe, toThrow } from "./assertions";

describe("assertions", () => {
  describe("not", () => {
    const expectedValue = "expectedValue";
    const expectedMessage = "expectedMessage";
    const assertion: Assertion<string> = {
      value: expectedValue,
      pass: true,
      message: expectedMessage,
    };
    const notAssertion = not(() => assertion)(expectedValue);

    it("should preserve original assertion value", () => {
      expect(notAssertion.value).toEqual(expectedValue);
    });

    it("should preserve original assertion message", () => {
      expect(notAssertion.message).toEqual(expectedMessage);
    });

    it("should invert assertion pass", () => {
      expect(notAssertion.pass).toEqual(false);
    });

    it("should add not property to assertion", () => {
      expect(notAssertion.not).toBe(true);
    });
  });

  describe("toThrow", () => {
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

    it("should return passing assertion string message matches error message", () => {
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

    it("should return failing assertion string message doesn't match error message", () => {
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

    it("should return passing assertion error instance matches class and error message", () => {
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

    it("should return failing assertion error instance doesn't match class", () => {
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

    it("should return failing assertion error instance doesn't match error message", () => {
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
});
