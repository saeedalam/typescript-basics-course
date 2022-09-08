// types
let number: number;
number = 10;
let anotherNumber: number;
anotherNumber = 10 * 2;

// Primative data type
let aAnyVar: any;
let aNumber: number = 10; //
let aString: string = "A string";
let aBoolean: boolean = true;

// union
// function isAdmin(role: "admin" | "user" | "super-admin") {
//   if (role === "admin") return true;

//   return false;
// }
// const role: "uesr" | "admin" | "super-admin" = "admin";
// console.log(isAdmin(role));

//custom type
type myType = 1 | "hi" | 3.14;
let myVar: myType = "hi";

type myNumbers = number;
let x: myNumbers = 3.234283742;

// Using custom types
type UserRole = "admin" | "user" | "super-admin";
function isAdmin(role: UserRole): boolean {
  if (role === "admin") return true;
  return false;
}
const role: UserRole = "admin";
console.log(isAdmin(role));

// enum
enum AllUsersRoles {
  "admin",
  "user",
  "super-admin",
}
const myRole: AllUsersRoles = AllUsersRoles.admin;
const myFriendRole: AllUsersRoles = AllUsersRoles.user;

function checkRole(role: AllUsersRoles) {
  console.log("Role is :", role);
}
checkRole(myRole);
checkRole(myFriendRole);

// object
type UserType = {
  firstName: string;
  lastName: string;
  age: number;
  job?: string;
};
const user: UserType = {
  firstName: "Adrian",
  lastName: "V.Alam",
  age: Number((5 / 9).toFixed(2)),
};
const otherUser: UserType = {
  firstName: "SAEED",
  lastName: "V.ALAM",
  age: 34,
  job: "Sth",
};
console.log("Name = ", user.firstName);
console.log("Last name =", user["lastName"]);

// Type inference describes where and how TypeScript infers types when you don’t explicitly annotate them.
// When you declare a variable, you can use a type annotation to explicitly specify a type for it

// More on Enum = Numeric Enums
enum CardinalDirections {
  North,
  East,
  South,
  West
}
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);


// Numeric Enums and init
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);



// intersection

// array

// Tuple
// A tuple is a typed array with a pre-defined length and types for each index.
let ourTuple: [number, boolean, string];

// destructing tuples
const graph: [number, number] = [55.2, 41.3];
// const [x, y] = graph;


// More on Types
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

// interfaces
// Interfaces are similar to type aliases, except they only apply to object types.
interface Rectangle {
  height: number,
  width: number
}

const rectangle: Rectangle = {
  height: 20,
  width: 10
};



// extending interface
interface Rectangle {
  height: number,
  width: number
}

interface ColoredRectangle extends Rectangle {
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};

// unknown

// never

const p: number = 3.14;
// p = 10 ;

function add2Number(a: number, b: number): number {
  let c: number = a + b;
  return c;
}

console.log(add2Number(20, 40));

const r = add2Number(10, 20);
const resultAsString = r.toFixed();
//const secondResult = add2Number(1 , resultAsString)
const secondResult: number = add2Number(1, parseInt(resultAsString));
