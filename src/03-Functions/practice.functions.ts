// // function name(parameter1 : number, parameter2, parameter3):number {
// //     // code to be executed
// //    return ??
// //  }

// function myFunctions(p1: number, p2: number): number {
//   return p1 * p2; // The function returns the product of p1 and p2
// }

// // Local variables
// // code here can NOT use carName
// // console.log(carName);
// function myFunction() {
//   let carName = "Volvo";
//   // code here CAN use carName
// }
// // code here can NOT use carName

// const myFunc = () => {};

// type myStringOrNumber = number | string;
// const sum = (a: number, b: number): myStringOrNumber => {
//   if (a < 20) {
//     return "salam";
//   }

//   return a + b;
// };
// sum(10, 20);
// sum(100, 20);

// // return
// const myFunc3 = () => {
//   return 10;
// };

// // No return on simple arrow functions
// const getNumber = (a: number) => a;
// const strToNumber = (a : string) => parseInt(a)
// const strToNumber2 = (a: string) => Number(a);
// console.log(strToNumber2("123"));

// const anotherNumberx = ["12", "34"].map(strToNumber2);
// console.log(anotherNumberx);

// // rest param
const sumFunc = (...items: number[]): number => {
  let x = 0;
  // for
  //-------------------
  // for (let i = 0; i < items.length; i++) {
  //   x += items[i];
  // }
  //
  // while
  //-------------------
  // let i = 0;
  // while (i < items.length) {
  //   x += items[i];
  //   i++;
  // }

  // forEach
  // ----------------
  //items.forEach((item) => (x += item));
  // for in
  //----------------------
  // for (let item in items) {
  //   //console.log(item);
  //   x += items[item];
  // }

  // for of
  // for (let item of items) {
  //   x += item;
  // }
  return x;
};
console.log(sumFunc(10, 20, 23, 42, 54));

const sumFactor = (a: number, b: number) => a + b;
//console.log(sumFactor(10, 20, 23, 42, 54));

// // narrowing
function fn(a: unknown) {
  // typeof for primative types : string , number , boolean
  // instanceOf for objects
  // in for interfaces
}

// // in operator narrowing
// type Fish = { swim: () => void };
// type Bird = { fly: () => void };

// function move(animal: Fish | Bird) {
//   if ("swim" in animal) {
//     return animal.swim();
//   }

//   return animal.fly();
// }

// const Ghobad: Fish = {
//   swim: () => {
//     return console.log("Swim");
//   },
// };
// move(Ghobad);

// instanceof narrowing
// function logValue(x: Date | string) {
//   if (x instanceof Date) {
//     console.log(x.toUTCString());
//   } else {
//     console.log(x.toUpperCase());
//   }
// }

// //Using type predicates
// function isFish(pet: Fish | Bird): pet is Fish {
//   return (pet as Fish).swim !== undefined;
// }

// // Both calls to 'swim' and 'fly' are now okay.
// let pet = getSmallPet();

// if (isFish(pet)) {
//   pet.swim();
// } else {
//   pet.fly();
// }

// //

// //
// const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
// const underWater1: Fish[] = zoo.filter(isFish);
// // or, equivalently
// const underWater2: Fish[] = zoo.filter(isFish) as Fish[];

// // The predicate may need repeating for more complex examples
// const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
//   if (pet.name === "sharkey") return false;
//   return isFish(pet);
// });
