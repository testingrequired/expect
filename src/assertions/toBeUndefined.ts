import { Assertion } from "./index";

export const toBeUndefined = <T>(actual: T): Assertion<T> => {
  return {
    value: actual,
    pass: actual === undefined,
    message: `is undefined`,
  };
};
