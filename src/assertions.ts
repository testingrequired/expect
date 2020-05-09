export interface AssertionFn<T> {
  (value: T): Assertion<T>;
}

export interface Assertion<T> {
  value: T;
  pass: boolean;
  not?: boolean;
  message: string;
}

export const toEqual = <T>(expected: T) => (actual: T): Assertion<T> => {
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

export const toThrow = <T>(errorMatching?: string | Error) => (value: any) => {
  try {
    value.call(null);
    return {
      value,
      pass: false,
      message: `to throw`,
    };
  } catch (e) {
    if (errorMatching) {
      if (typeof errorMatching === "string") {
        return errorMatchingString(e, errorMatching);
      } else {
        return errorMatchingClass(e, errorMatching);
      }
    } else {
      return {
        value,
        pass: true,
        message: `to throw`,
      };
    }
  }

  function errorMatchingString(e: Error, errorMatching: string) {
    if (e.message === errorMatching) {
      return {
        value,
        pass: true,
        message: `to throw "${errorMatching}"`,
      };
    } else {
      return {
        value,
        pass: false,
        message: `to throw "${errorMatching}"`,
      };
    }
  }

  function errorMatchingClass(e: Error, errorMatching: Error) {
    if (errorMatching instanceof e.constructor) {
      if (e.message === errorMatching.message) {
        return {
          value,
          pass: true,
          message: `to throw ${errorMatching.constructor.name}("${errorMatching.message}")`,
        };
      } else {
        return {
          value,
          pass: false,
          message: `to throw ${errorMatching.constructor.name}("${errorMatching.message}")`,
        };
      }
    } else {
      return {
        value,
        pass: false,
        message: `to throw ${errorMatching.constructor.name}("${errorMatching.message}")`,
      };
    }
  }
};
