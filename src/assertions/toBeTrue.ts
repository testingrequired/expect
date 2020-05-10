import { Assertion } from "./index";

export const toBeTrue = <T>(actual: T): Assertion<T> => {
  return {
    value: actual,
    pass: (actual as any) === true,
    message: `is true`,
  };
};
