import { AssertionFn, Assertion } from "./index";

export const not = <T>(assertionFn: AssertionFn<T>) => (
  value: any
): Assertion<T> => {
  const assertion = assertionFn(value);
  return { ...assertion, not: true, pass: !assertion.pass };
};
