import { Assertion } from "./index";

export const toThrow = <T>(errorMatching?: string | Error) => (
  value: any
): Assertion<T> => {
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
