import { it, expect } from "vitest";
import { User, Role } from "./union.solution";

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  role: Role.user,
};

function isNotAdmin(user: User) {
  if (user.role === Role.user) {
    return true;
  }

  return false;
}

it("Is not admin", () => {
  expect(isNotAdmin(defaultUser)).toBe(true);
});
