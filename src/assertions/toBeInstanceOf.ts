import { Assertion } from "./index";

export const toBeInstanceOf = <T>(expected: new () => any) => (
  actual: T
): Assertion<T> => {
  return {
    value: actual,
    pass: actual instanceof expected,
    message: `is instanceof ${expected.name}`,
  };
};
