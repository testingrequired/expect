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
    message: `${JSON.stringify(actual)} === ${JSON.stringify(expected)}`,
  };
};

export const toBe = <T>(expected: T) => (actual: T): Assertion<T> => {
  return {
    value: actual,
    pass: Object.is(expected, actual),
    message: `${JSON.stringify(actual)} is ${JSON.stringify(expected)}`,
  };
};

export const not = <T>(assertionFn: AssertionFn<T>) => (value: any) => {
  const assertion = assertionFn(value);
  return { ...assertion, not: true, pass: !assertion.pass };
};
