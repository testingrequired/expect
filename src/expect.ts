import { AssertionFn, Assertion } from "./assertions";
import { AssertionError } from "assert";

export function makeExpect<E extends Error>(
  mapToError: (assertion: Assertion<any>) => E
) {
  function expect<T>(value: T, assertionFn: AssertionFn<T>): void {
    const assertion = assertionFn.call(null, value);

    if (!assertion.pass) {
      throw mapToError(assertion);
    }
  }

  return expect;
}

export const expect = makeExpect(
  ({ value, message }) => new AssertionError({ actual: value, message })
);
