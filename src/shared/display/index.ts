type Success = {
  type: "SUCCESS";
};

type Failure<T> = {
  type: "FAILURE";
  reason: {
    expected: T;
    actual: T;
  };
};

export type Result<T> = Success | Failure<T>;

export const success = (): Success => ({
  type: "SUCCESS",
});

export const failure = <T>(expected: T, actual: T): Failure<T> => ({
  type: "FAILURE",
  reason: {
    expected,
    actual,
  },
});

const display = <T>(slug: string, result: Result<T>): void => {
  switch (result.type) {
    case "SUCCESS":
      console.log(`🟢 ${slug}`);
      return;
    case "FAILURE":
      console.log(`🔴 ${slug}: expected ${result.reason.expected} but got ${result.reason.actual}`);
      return;
  }
};

export default display;
