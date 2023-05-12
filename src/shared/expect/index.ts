import { Result, success, failure } from "../display";

const expect = <T>(expected: T, actual: T): Result<T> => {
  // Could be something much more sophisticated!
  const result = actual === expected;

  if (result) {
    return success();
  }
  return failure(expected, actual);
};

export default expect;
