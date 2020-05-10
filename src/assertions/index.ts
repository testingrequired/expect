export interface AssertionFn<T> {
  (value: T): Assertion<T>;
}

export interface Assertion<T> {
  value: T;
  pass: boolean;
  not?: boolean;
  message: string;
}

export { not } from "./not";
export { toBe } from "./toBe";
export { toEqual } from "./toEqual";
export { toThrow } from "./toThrow";
export { toBeUndefined } from "./toBeUndefined";
export { toBeNull } from "./toBeNull";
export { toBeFalse } from "./toBeFalse";
export { toBeFalsy } from "./toBeFalsy";
export { toBeTrue } from "./toBeTrue";
export { toBeTruthy } from "./toBeTruthy";
export { toBeInstanceOf } from "./toBeInstanceOf";
