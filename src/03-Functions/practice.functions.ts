// function name(parameter1, parameter2, parameter3) {
//     // code to be executed
//  }

function myFunctions(p1 :number, p2 :number) {
    return p1 * p2;   // The function returns the product of p1 and p2
}

// Local variables
// code here can NOT use carName
function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
}
// code here can NOT use carName

const myFunc = () => {}

const myFunc2 = (a :number,b: number) => {return 10}

// return
const myFunc3 = () => { return 10 }

// return type

// No return on simple arrow functions
const getNumber = (a:number) => a


// rest param
const summ = (...params:number[]) => {}



// narrowing


// in operator narrowing
type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}

// instedof narrowing
function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
                 
    } else {
      console.log(x.toUpperCase());
                 
    }
  }

  //Using type predicates
  function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
  }

  // Both calls to 'swim' and 'fly' are now okay.
let pet = getSmallPet();
 
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

//

//
const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1: Fish[] = zoo.filter(isFish);
// or, equivalently
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];
 
// The predicate may need repeating for more complex examples
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === "sharkey") return false;
  return isFish(pet);
});
  

