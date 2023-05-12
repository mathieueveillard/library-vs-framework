import display, { Result } from "../../shared/display";
import expect from "../../shared/expect";

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
