// make an array
const arr: string[] = ["a", "b"];
// Array
const cars = new Array("Saab", "Volvo", "BMW", "Audi");
const cars2 = new Array<string | number>(1, 2, 4, "ss");
// Arrays are Objects
console.log(typeof []);

// cars instedof Array
console.log(cars instanceof Array);

// Guards
// typeof => number , string , boolean
// in => interface
// instanceOf => Object -> Arrays also are object
function pr(item: string | number | string[]) {
  if (typeof item === "number" || typeof item === "string") {
  } else if (item instanceof Array) {
  }
}
// Array Elements Can Be Objects
interface IUser {
  id: number;
  name: string;
}

type User = {
  id: number;
  name: string;
};

let u: User = {
  id: 1,
  name: "Alex",
};
let iu: IUser = {
  id: 2,
  name: "Name",
};
let users: (User | IUser)[];
users = [u, iu];
users.push(u);

// readonly array
const names: readonly string[] = ["Dylan"];
//names.push("kk");

// type infrence
const numbers = [1, 2, "3"]; // inferred to type number[]
numbers.push(4, 3, 4); // no error
// comment line below out to see the successful assignment
numbers.push("2");

// When to Use Arrays. When to use Objects.
// JavaScript does not support associative arrays.
// You should use objects when you want the element names to be strings (text).
// You should use arrays when you want the element names to be numbers.

// Arrays properties and methods
cars.length; // Returns the number of elements
cars.sort(); // Sorts the array

// Accessing
console.log(cars[0]);

// Looping

//for
// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// foreach
//cars.forEach((item) => console.log(item));

// for of
//for (let i of cars) console.log(i);

// for in
//for (let i in cars) console.log(cars[i]);

// push
cars.push("SAMAND", "206");

// pop
cars.pop();
for (let i in cars) console.log(cars[i]);

// array to use
const nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// filter
// const res = nums.filter((item) => {
//   if (item % 2 == 0) return true;
// });

// let res = nums.filter((item) => item % 2 == 0);

// map
// let res = nums.map((item) => item * 2);
// console.log(res);

// filter + map
// let res = nums.filter((item) => item % 2 == 0).map((item) => item * 2);
// console.log(res);

// reduce
// let sum = nums.reduce((acc, val) => acc + val, 0);
// console.log(sum);

// shift
// nums.shift();
// nums.shift();
// console.log(nums);

// QUEUE
//const q: string[] = ["A", "B", "C"];
// q.push("D");
// console.log(q);
// q.shift();
// console.log(q);
// q.pop();
// console.log(q);

// unshift
nums.unshift(22, 33, 44);
console.log(nums);

// concat
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren = arr1.concat(arr2, arr3);
// console.log(myChildren);

// splice
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 1, "Lemon", "Kiwi");
// console.log(fruits.indexOf("Apple"));

// delete apple
// fruits.splice(fruits.indexOf("Apple"), 1);

// console.log(fruits);

// slice
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.
const fruitss = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruitss.slice(2);
console.log("Base :", fruitss);
console.log(citrus);
// toString
console.log(fruits.toString());
console.log(fruits.join(" "));

// every()
console.log(nums.every((i) => i > 0));

// some()
const isPositive = (n: number): boolean => (n >= 0 ? true : false);
// console.log(nums.some((i) => i > 9));
console.log(nums.some(isPositive));

// lastIndexOf()

// find()
// console.log(numbers.find((i) => i > 2));

// include
// console.log(fruitss.includes("Apple"));
