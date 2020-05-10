import { Assertion } from "./index";

export const toBe = <T>(expected: T) => (actual: T): Assertion<T> => {
  return {
    value: actual,
    pass: Object.is(expected, actual),
    message: `${JSON.stringify(actual)} is ${JSON.stringify(expected)}`,
  };
};
