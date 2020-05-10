import { Assertion } from "./index";
import { not } from "./not";

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
