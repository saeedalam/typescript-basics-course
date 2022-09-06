import { it, expect, describe } from "vitest";
import { addNumbers } from "./solution";

describe("TESTS", () => {
  it("Should add two numbers", () => {
    expect(addNumbers(2, 2)).toBe(4);
  });

  it("Should return error on fail", () => {
    expect(addNumbers(2, 2)).toBeGreaterThan(3);
  });
});
