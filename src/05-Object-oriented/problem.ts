class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

const john = new Person('John', 25);
john.greet();

// class Person {
//     constructor(public name:string ,public age:number){}

//     greet() {
//         console.log(`Hello , my name is ${this.name} and I'm ${this.age} years old.`)
//     }
// }
// const obj = new Person("SAEED" , 35)
// console.log(obj.greet())


class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound() {
        console.log('Animal is making a sound');
    }
}

class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    makeSound() {
        console.log('Woof!');
    }
}

const myDog = new Dog('Buddy', 'Labrador');
myDog.makeSound();


//---
class Car {
    private mileage: number;

    constructor() {
        this.mileage = 0;
    }

    drive(distance: number) {
        this.mileage += distance;
        console.log(`Car has driven ${distance} miles. Total mileage: ${this.mileage}`);
    }
}

const myCar = new Car();
myCar.drive(50); // Output: Car has driven 50 miles. Total mileage: 50
myCar.drive(120);


//---- get set
class Circle {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    get circumference() {
        return 2 * Math.PI * this.radius;
    }

    set diameter(diameter: number) {
        this.radius = diameter / 2;
    }
}

const myCircle = new Circle(5);
console.log(myCircle.circumference); // Output: 31.41592653589793

myCircle.diameter = 10;
console.log(myCircle.circumference); // Output: 31.41592653589793

//-------
class MathUtils {
    static PI = 3.14159;

    static calculateArea(radius: number) {
        return MathUtils.PI * radius * radius;
    }
}

console.log(MathUtils.calculateArea(5)); // Output: 78.53975

//------ abstract classes - abstaract methods
abstract class Shape {
    abstract calculateArea(): number;

    printArea() {
        const area = this.calculateArea();
        console.log(`The area of the shape is: ${area}`);
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

const myRectangle = new Rectangle(5, 10);
myRectangle.printArea(); // Output: The area of the shape is: 50

//------ polymorphism
class Vehicle {
    honk() {
        console.log('Beep beep!');
    }
}

class Car extends Vehicle {
    honk() {
        console.log('Honk honk!');
    }
}

class Bicycle extends Vehicle {
    honk() {
        console.log('Ring ring!');
    }
}

const myCar = new Car();
const myBicycle = new Bicycle();

myCar.honk(); // Output: Honk honk!
myBicycle.honk(); // Output: Ring ring!

// -----interface implementation
interface Animal {
    makeSound(): void;
}

class Dog implements Animal {
    makeSound() {
        console.log('Woof!');
    }
}

const myDog = new Dog();
myDog.makeSound(); // Output: Woof!


// ---- Mixins
class Printable {
    print() {
        console.log('Printable content');
    }
}

class Savable {
    save() {
        console.log('Data saved');
    }
}

class Document implements Printable, Savable {
    print: () => void;
    save: () => void;

    constructor() {
        const printable = new Printable();
        const savable = new Savable();

        Object.assign(this, printable, savable);
    }
}

const myDocument = new Document();
myDocument.print(); // Output: Printable content
myDocument.save(); // Output: Data saved


// coposition
class Engine {
    start() {
        console.log('Engine started');
    }
}

class Car {
    private engine: Engine;

    constructor() {
        this.engine = new Engine();
    }

    start() {
        this.engine.start();
        console.log('Car started');
    }
}

const myCar = new Car();
myCar.start(); // Output: Engine started, Car started



