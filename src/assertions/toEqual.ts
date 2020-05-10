import { Assertion } from "../assertions";

export const toEqual = <T>(expected: T) => (actual: T): Assertion<T> => {
  return {
    value: actual,
    pass: JSON.stringify(actual) === JSON.stringify(expected),
    message: `${JSON.stringify(actual)} === ${JSON.stringify(expected)}`,
  };
};
