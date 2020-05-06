import { AssertionFn } from "./assertions";
import { AssertionError } from "assert";

export const expect = <T>(value: T, assertionFn: AssertionFn<T>): void => {
  const assertion = assertionFn.call(null, value);

  if (!assertion.pass) {
    throw new AssertionError({
      actual: assertion.value,
      message: assertion.message,
    });
  }
};
