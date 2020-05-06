import { toEqual, Assertion, not } from "./assertions";

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

  describe("toEqual", () => {
    it("should return passing assertion if values match", () => {
      const expected = "expectedValue";
      const actual = expected;

      expect(toEqual(expected)(actual)).toEqual({
        value: actual,
        pass: true,
        message: `expectedValue === expectedValue`,
      });
    });

    it("should return failing assertion if values don't match", () => {
      const expected = "expectedValue";
      const actual = "actualValue";

      expect(toEqual(expected)(actual)).toEqual({
        value: actual,
        pass: false,
        message: `actualValue === expectedValue`,
      });
    });
  });
});
