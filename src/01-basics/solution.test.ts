import { it, expect, describe } from "vitest";

function addNumbers(a: number, b: number): number {
  let c: number = a + b;
  return c;
}

describe("TESTS", () => {
  it("Should add two numbers", () => {
    expect(addNumbers(2, 2)).toBe(4);
  });
});
