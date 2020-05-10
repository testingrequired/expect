import { AssertionFn, Assertion } from "./assertions";
import { AssertionError } from "assert";

/**
 * Configure an instance of expect to use custom assertion error
 * @param mapToError Function to make an assertion to an error to be thrown
 * @returns Configured expect instance
 */
export function makeExpect<E extends Error>(
  mapToError: (assertion: Assertion<any>) => E
) {
  /**
   * Test value against assertion function
   * @param value Value under test
   * @param assertionFn Function to assert on value
   */
  function expect<T>(value: T, assertionFn: AssertionFn<T>): void {
    const assertion = assertionFn.call(null, value);

    if (!assertion.pass) {
      const error = mapToError.call(null, assertion);
      throw error;
    }
  }

  return expect;
}

/**
 * Default expect
 */
export const expect = makeExpect(
  ({ value, message }) => new AssertionError({ actual: value, message })
);
