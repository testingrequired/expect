import { expect as expectFn } from "./expect";
import { AssertionError } from "assert";

describe("expect", () => {
  const expectedValue = "expectedValue";
  const expectedMessage = "expectedMessage";

  it("should throw assertion error if not passing", () => {
    try {
      expectFn(expectedValue, (value) => ({
        value: expectedValue,
        pass: false,
        message: expectedMessage,
      }));
      fail("Did not throw");
    } catch (e) {
      expect(e).toBeInstanceOf(AssertionError);
      expect(e.actual).toBe(expectedValue);
      expect(e.message).toEqual(expectedMessage);
    }
  });

  it("should not throw assertion error if passing", () => {
    expect(() => {
      expectFn(expectedValue, (value) => ({
        value: expectedValue,
        pass: true,
        message: expectedMessage,
      }));
    }).not.toThrow();
  });
});
