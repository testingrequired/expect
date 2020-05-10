import { AssertionFn, Assertion } from "../assertions";

export const not = <T>(assertionFn: AssertionFn<T>) => (
  value: any
): Assertion<T> => {
  const assertion = assertionFn(value);
  return { ...assertion, not: true, pass: !assertion.pass };
};
