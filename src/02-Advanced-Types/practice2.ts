// Type intersection
type TLeft = {
    id: number,
    left: number
}

type TRight = {
    id: number,
    right: number
}

type TLeftRight = TLeft & TRight;
const item: TLeftRight = { id: 1, left: 11, right: 22 };
console.log(item)


//union

//generic
function typer<T>(inpt: T) {
    if (typeof inpt === "number") {
        console.log(`${inpt} is a number`)
    } else if (typeof inpt === "string") {
        console.log(`${inpt} is a string`)
    } else {
        console.log(`${inpt} is uknown for me`)
    }
}
typer(1)
typer("SALAM")
typer(true)


//---
interface IU<T> {
    id: T,
    name: string
}

function iuPrinter<T>(data: IU<T>) {
    console.log(data)
}

const u1: IU<number> = {
    id: 1,
    name: "SAEED"
}
const u2: IU<string> = {
    id: "n12-39",
    name: "saeed"
}

iuPrinter(u1)
iuPrinter(u2)

//---
interface IURepo<T, U> {
    id: T,
    items: U
}
const u3: IURepo<number, string> = {
    id: 123,
    items: "0xwiry38739r8u934u"
}
const u4: IURepo<string, string> = {
    id: "2349284923dsdsf",
    items: "0xiwueyr738"
}

const u5: IURepo<string, string[]> = {
    id: "03dfdFGH",
    items: ["1", "23", "4"]
}

function uirepoPrinter<T, U>(data: IURepo<T, U>) {
    console.log(data)
}

uirepoPrinter(u3);
uirepoPrinter(u4);
uirepoPrinter(u5);


//--- utility types
interface IStudent {
    id: number,
    name: string,
    age: number
}

function utilTest(item: Partial<IStudent>) {
    console.log(item)
}

function utilReqTest(item: Required<IStudent>) {
    console.log(item)
}

const s1: Partial<IStudent> = {
    id: 1,
    name: "Adrian"
}

const s2: IStudent = {
    id: 1,
    name: "Adrian",
    age: 23
}

utilTest(s1)
utilTest({ id: 1, name: "Adrian", age: 23 })

utilReqTest(s2)
utilReqTest({ id: 1, name: "Adrian", age: 234 })


//Pick<>
type UserBasics = Required<Pick<IStudent, "name" | "id">>;
function printSomething(data: UserBasics) {
    console.log(data)
}
printSomething({ id: 12, name: "Adrian" })
// omit
type OmitType = Omit<IStudent, "id" | "age">;
const item2: OmitType = { name: "name" }


// ---------- Extract<T, U>
// Extract allows you to construct a type by picking properties that are present in two different types.
// The utility will extract from T all properties that are assignable to U.
// interface FirstType {
//     id: number
//     firstName: string
//     lastName: string
// }

// interface SecondType {
//     id: number
//     address: string
//     city: string
// }

// type ExtractType = Extract<keyof FirstType, keyof SecondType>
// const xx : ExtractType  =  "id"
//   // Output: "id"
// console.log(xx)

// type MyExtType = Extract<keyof FirstType ,keyof SecondType>
// const myvar : MyExtType = "id";

// ----------- Exclude
interface FirstType {
    id: number
    firstName: string
    lastName: string
}

interface SecondType {
    id: number
    address: string
    city: string
}

type ExcludeType = Exclude<keyof FirstType, keyof SecondType>

// Output; "firstName" | "lastName"

//----
type Posts = Record<string, IStudent>;
const posts: Posts = {
    "0x1": { id: 1, name: "Adrian", age: 23 },
    "0x2": { id: 2, name: "SAEED", age: 99 },
}
console.log(posts)
console.log(posts["0x1"])

//------
type TFree = string | null | undefined | number;
function checker(item: NonNullable<TFree>) {
    console.log(item)
}
checker(1)
checker("!")
// checker(null)
//---------

// Map types
type MyStringT<T> = {
    [P in keyof T]: string
}
type MyNumberT<T> = {
    [P in keyof T]: number
}
type MyPartial<T> = {
    [P in keyof T]?: T[P]
}
type MyRequired<T> = {
    [P in keyof T]: T[P]
}
type MyReadOnly<T> = {
    readonly [P in keyof T]: T[P]
}

const stu: MyStringT<IStudent> = {
    id: "0239208",
    name: "Saeed",
    age: "39"
}
const stud: MyNumberT<IStudent> = {
    id: 123,
    name: 1,
    age: 39
}
const mystud: MyPartial<IStudent> = {
    id: 1,
}


// type Guard
function typeGuard(a: number | string) {
    if (typeof a === "number") {
        console.log("Do something")
        return "do something"
    } else {
        return "Wrong data type";
    }
}

typeGuard(1)
typeGuard("1")

class Foo {
    constructor(public id: number, public name: string) { }
}

class Bar {
    constructor(public id: number, public fullname: string) { }
}

function classTypeGuard(data: Foo | Bar) {
    if (data instanceof Foo) {
        console.log("it is a Foo")
        return
    }
    console.log("it is a Bar")
}

const dat = new Foo(12, "@323")
classTypeGuard(dat)


interface Truck {
    id: number,
    model: string,
    year: string
}
interface Plane {
    id: number,
    flightRange: number,
    model: number
}

const semiTruck: Truck = {
    id: 1,
    model: "Semi",
    year: "2023"
}
const B747: Plane = {
    id: 1232,
    flightRange: 10000,
    model: 1989
}

function infoPrinter(carge: Truck | Plane) {
    if ("flightRange" in carge) {
        return `${JSON.stringify(carge)} is a Plane`;
    }
    return `${JSON.stringify(carge)} is a Truck`;
}

console.log(infoPrinter(semiTruck))
console.log(infoPrinter(B747))


// another type guard 
interface Cat {
    name: string;
    meow(): void;
}

interface Dog {
    name: string;
    bark(): void;
}

function makeSound(animal: Cat | Dog) {
    if ('meow' in animal) {
        // Type guard using 'in' operator
        animal.meow();
    } else {
        // We can safely assume it's a Dog
        animal.bark();
    }
}



//type assert
interface Vehicle {
    name: string;
}

interface MyCar extends Vehicle {
    wheels: number;
}

function getVehicleName(vehicle: Vehicle) {
    const car = vehicle as MyCar; // Type assertion using 'as' keyword
    console.log(car.name, car);
}

const v: Vehicle = { name: "BMW" }
getVehicleName(v)

// type assert function
function assertIsNumber(val: any): asserts val is number {
    if (typeof val !== "number") {
        throw new Error("Not a number!");
    }
}

export function double(input: any) {
    assertIsNumber(input);

    return input * 2;
}
console.log(double(100))
//console.log(double("100"))



// ---- type lookup
interface Person {
    name: string;
    age: number;
    address: string;
}

type PersonName = Person['name']; // Type lookup

const personName: PersonName = 'John';
console.log(personName); // Output: John


// ---- Another type lookup
interface User {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        city: string;
        postalCode: string;
    };
}

type Address = User['address']; // Type lookup
type City = Address['city']; // Nested type lookup

const userAddress: Address = {
    street: '123 Main St',
    city: 'Example City',
    postalCode: '12345'
};

const userCity: City = 'Example City';


// ----  type guard predicates
export type LineItem = {
    productId: number;
    quantity: number;
    discounted?: boolean;
    unitPrice: number;
};

export type FinalInvoice = {
    __typename: "FinalInvoice";
    insertedAt: string;
    invoiceNumber: string;
    customerId: number;
    approvedBy: number;
    lineItems: LineItem[];
};

export type DraftInvoice = {
    __typename: "DraftInvoice";
    insertedAt: string;
    invoiceNumber?: string;
    customerId?: number;
    approvedBy?: number;
    lineItems: LineItem[];
};

export type Invoice = FinalInvoice | DraftInvoice;

export const isFinalInvoice = (invoice: Invoice): invoice is FinalInvoice => {
    return invoice.__typename === "FinalInvoice";
};

export const isDraftInvoice = (invoice: Invoice): invoice is DraftInvoice => {
    return invoice.__typename === "DraftInvoice";
};

const invoice: Invoice = {
    __typename: "DraftInvoice",
    insertedAt: "2021-05-01",
    lineItems: []
};

console.log(isFinalInvoice(invoice))
console.log(isDraftInvoice(invoice))



//- -----
export type Product = {
    id: number,
    title: string,
    quantity: number,
    unitPrice: number
}

export interface IDraftInvoice {
    __typeName: "DraftInvoice"
    invoiceId?: number,
    customerId: string,
    products: Product[],
    insertedAt: string,
    approvedBy?: number
}
export interface IFinalInvoice {
    __typeName: "FinalInvoice"
    invoiceId: number,
    customerId: string,
    products: Product[],
    insertedAt: string,
    approvedBy: number
}
export type IInvoice = IFinalInvoice | IDraftInvoice ;

function isAFinalInvoice(invoice : IInvoice) : invoice is IFinalInvoice {
    return invoice.__typeName === "FinalInvoice"
}
function isADraftInvoice(invoice : IInvoice) : invoice is IDraftInvoice {
    return invoice.__typeName === "DraftInvoice"
}

const inv : IInvoice = {
    __typeName : "FinalInvoice" ,
    insertedAt : "22",
    invoiceId : 123 ,
    approvedBy : 1 ,
    customerId : "1313" ,
    products : []
}

isADraftInvoice(inv)
isAFinalInvoice(inv)