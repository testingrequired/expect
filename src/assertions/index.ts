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
