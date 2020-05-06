export interface AssertionFn<T> {
  (value: T): Assertion<T>;
}

export interface Assertion<T> {
  value: T;
  pass: boolean;
  not?: boolean;
  message: string;
}

export const toEqual = <T>(expected: any) => (actual: T): Assertion<T> => {
  return {
    value: actual,
    pass: actual === expected,
    message: `${actual} === ${expected}`,
  };
};

export const not = <T>(assertionFn: AssertionFn<T>) => (value: any) => {
  const assertion = assertionFn(value);
  return { ...assertion, not: true, pass: !assertion.pass };
};
