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

// object

// intersection

// array

// litral

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