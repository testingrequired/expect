import { Assertion } from "../assertions";

export const toEqual = <T>(expected: T) => (actual: T): Assertion<T> => {
  return {
    value: actual,
    pass: actual === expected,
    message: `${JSON.stringify(actual)} === ${JSON.stringify(expected)}`,
  };
};
