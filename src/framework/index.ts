import test from "./test";

test("This test succeeds", (expect) => {
  expect(0, 0);
});

test("This test fails", (expect) => {
  expect(0, 1);
});
