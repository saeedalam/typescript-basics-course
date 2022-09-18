interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

export function logPerson(person: Person) {
  if ("role" in person) {
    console.log(` - ${person.name}, ${person.age} , ${person.role}`);
  } else {
    console.log(` - ${person.name}, ${person.age} , ${person.occupation}`);
  }
}

persons.forEach((person) => logPerson(person));

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/types-from-types.html
