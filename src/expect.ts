import { AssertionFn, Assertion } from "./assertions";
import { AssertionError } from "assert";

function makeExpect<E>(mapToError: (assertion: Assertion<any>) => E) {
  function expect<T>(value: T, assertionFn: AssertionFn<T>): void {
    const assertion = assertionFn.call(null, value);

    if (!assertion.pass) {
      throw mapToError(assertion);
    }
  }

  return expect;
}

export const expect = makeExpect(
  (assertion: Assertion<any>) =>
    new AssertionError({
      actual: assertion.value,
      message: assertion.message,
    })
);
