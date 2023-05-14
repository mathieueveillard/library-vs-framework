import { Result } from "library";
import display from "library/display";
import expect from "library/expect";

// Framework's code; builds on library's code.

type Expect<T> = (expected: T, actual: T) => void;

type Scenario<T> = (expect: Expect<T>) => void;

const test = <T>(slug: string, scenario: Scenario<T>): void => {
  let result: Result<T>;

  const sideEffectExpect = (expected: T, actual: T): void => {
    result = expect(expected, actual);
  };

  scenario(sideEffectExpect);

  display(slug, result);
};

export default test;
