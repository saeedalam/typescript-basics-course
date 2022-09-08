import { it, expect, describe } from "vitest";
import { factorial } from "./factorial.problem";

it("should calculate factorial of the input", () => {
  expect(factorial(3)).toBe(6);
  expect(factorial(2)).toBe(2);
  expect(factorial(4)).toBe(24);
});
