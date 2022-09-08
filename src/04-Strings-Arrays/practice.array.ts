// make an array

// Array
const cars = new Array("Saab", "Volvo", "BMW");

// Arrays are Objects
console.log(typeof [])

// cars.isArray()

// cars instedof Array

// Array Elements Can Be Objects

// readonly array
const names: readonly string[] = ["Dylan"];
names.push("kk")

// type infrence
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
numbers.push("2"); 

// When to Use Arrays. When to use Objects.
// JavaScript does not support associative arrays.
// You should use objects when you want the element names to be strings (text).
// You should use arrays when you want the element names to be numbers.

// Arrays properties and methods
cars.length   // Returns the number of elements
cars.sort()   // Sorts the array

// Accessing
console.log(cars[0])

// Looping

//for

// foreach

// for of

// for in

// push

// pop

// filter

// map

// reduce

// shift

// unshift

// delete

// concat
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);

// splice
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

// slice
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.
const fruitss = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruitss.slice(1);


// toString

// every()

// some()

// indexOf

// lastIndexOf()

// find()





