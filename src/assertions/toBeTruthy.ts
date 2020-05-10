import { Assertion } from "./index";

export const toBeTruthy = <T>(actual: T): Assertion<T> => {
  return {
    value: actual,
    pass: (actual as any) == true,
    message: `is truthy`,
  };
};
