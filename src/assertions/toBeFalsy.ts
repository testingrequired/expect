import { Assertion } from "./index";

export const toBeFalsy = <T>(actual: T): Assertion<T> => {
  return {
    value: actual,
    pass: (actual as any) == false,
    message: `is falsy`,
  };
};
