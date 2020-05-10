import { Assertion } from "./index";

export const toBeNull = <T>(actual: T): Assertion<T> => {
  return {
    value: actual,
    pass: actual === null,
    message: `is null`,
  };
};
