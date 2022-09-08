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
