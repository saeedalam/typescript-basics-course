// ---------------- Intersection type
// An intersection type is a way of combining multiple types into one.
// This means that you can merge a given type A with a type B or more and get back
// a single type with all properties.

type LeftType = {
  id: number;
  left: string;
};

type RightType = {
  id: number;
  right: string;
};

type IntersectionType = LeftType & RightType;

function showTypes(args: IntersectionType) {
  console.log(args);
}


// -------------  Union Types
// Union types allow you to have different types annotation within a given variable.
type UnionType = string | number

function showType(arg: UnionType) {
  console.log(arg)
}

showType("test")
// Output: test

showType(7)
// Output: 7

// --------------- Generic Types
// A generic type is a way of reusing part of a given type.
// It helps to capture the type T passed in as a parameter.
function showTypee<T>(args: T) {
    console.log(args)
  }
  
  showTypee("test")
  // Output: "test"
  
  showTypee(1)
  // Output: 1

// ---------------
interface GenericType<T> {
  id: number
  name: T
}

function showType(args: GenericType<string>) {
  console.log(args)
}

showType({ id: 1, name: "test" })
// Output: {id: 1, name: "test"}

function showTypeTwo(args: GenericType<number>) {
  console.log(args)
}

showTypeTwo({ id: 1, name: 4 })
// Output: {id: 1, name: 4}

// --------------
interface GenericType<T, U> {
    id: T
    name: U
  }
  
  function showType(args: GenericType<number, string>) {
    console.log(args)
  }
  
  showType({ id: 1, name: "test" })
  // Output: {id: 1, name: "test"}
  
  function showTypeTwo(args: GenericType<string, string[]>) {
    console.log(args)
  }
  
  showTypeTwo({ id: "001", name: ["This", "is", "a", "Test"] })
  // Output: {id: "001", name: Array["This", "is", "a", "Test"]}

// -------------- Utility Types
// Partial<T>
// Partial allows you to make all properties of the type T optional. It will add a ? mark next to every field.
interface PartialType {
    id: number
    firstName: string
    lastName: string
  }
  
  function showType(args: Partial<PartialType>) {
    console.log(args)
  }
  
  showType({ id: 1 })
  // Output: {id: 1}
  
  showType({ firstName: "John", lastName: "Doe" })
  // Output: {firstName: "John", lastName: "Doe"}


  // ----------- Required<T>
  interface RequiredType {
    id: number
    firstName?: string
    lastName?: string
  }
  
  function showType(args: Required<RequiredType>) {
    console.log(args)
  }
  
  showType({ id: 1, firstName: "John", lastName: "Doe" })
  // Output: { id: 1, firstName: "John", lastName: "Doe" }
  
  showType({ id: 1 })
  // Error: Type '{ id: number: }' is missing the following properties from type 'Required<RequiredType>': firstName, lastName

  // ----------- Readonly<T>
  interface ReadonlyType {
    id: number
    name: string
  }
  
  function showType(args: Readonly<ReadonlyType>) {
    args.id = 4
    console.log(args)
  }
  
  showType({ id: 1, name: "Doe" })
  // Error: Cannot assign to 'id' because it is a read-only property.

  // ------------ Pick<T, K>
  // It allows you to create a new type from an existing model T by selecting some properties K of that type
  interface PickType {
    id: number
    firstName: string
    lastName: string
  }
  
  function showType(args: Pick<PickType, "firstName" | "lastName">) {
    console.log(args)
  }
  
  showType({ firstName: "John", lastName: "Doe" })
  // Output: {firstName: "John"}
  
  showType({ id: 3 })
  // Error: Object literal may only specify known properties, 
  // and 'id' does not exist in type 'Pick<PickType, "firstName" | "lastName">'

  // ------------- Omit<T,K>
  // The Omit utility is the opposite of the Pick type. 
  // And instead of selecting elements, it will remove K properties from the type T.

  interface PickType {
    id: number
    firstName: string
    lastName: string
  }
  
  function showType(args: Omit<PickType, "firstName" | "lastName">) {
    console.log(args)
  }
  
  showType({ id: 7 })
  // Output: {id: 7}
  
  showType({ firstName: "John" })
  // Error: Object literal may only specify known properties, and 'firstName' does not exist in type 'Pick<PickType, "id">'

  
  // ---------- Extract<T, U>
  // Extract allows you to construct a type by picking properties that are present in two different types.
  // The utility will extract from T all properties that are assignable to U.
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
  
  type ExtractType = Extract<keyof FirstType, keyof SecondType>
  // Output: "id"

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

  // ---------- Record<K,T>
  interface EmployeeType {
    id: number
    fullname: string
    role: string
  }
  
  let employees: Record<number, EmployeeType> = {
    0: { id: 1, fullname: "John Doe", role: "Designer" },
    1: { id: 2, fullname: "Ibrahima Fall", role: "Developer" },
    2: { id: 3, fullname: "Sara Duckson", role: "Developer" },
  }

  // ---------- NonNullable<T>
  // It allows you to remove null and undefined from the type T.
  type NonNullableType = string | number | null | undefined

function showType(args: NonNullable<NonNullableType>) {
  console.log(args)
}

showType("test")
// Output: "test"

showType(1)
// Output: 1

showType(null)
// Error: Argument of type 'null' is not assignable to parameter of type 'string | number'.

showType(undefined)
// Error: Argument of type 'undefined' is not assignable to parameter of type 'string | number'.

// ------------- 
// ------------- Mapped types
// -------------
// Mapped types allow you to take an existing model and transform each of its properties into a new type.
// Note that some utility types covered earlier are also mapped types.
type StringMap<T> = {
    [P in keyof T]: string
  }
  
  function showType(arg: StringMap<{ id: number; name: string }>) {
    console.log(arg)
  }
  
  showType({ id: 1, name: "Test" })
  // Error: Type 'number' is not assignable to type 'string'.
  
  showType({ id: "testId", name: "This is a Test" })
  // Output: {id: "testId", name: "This is a Test"}

// Make Partial , Optional , ReadOnly .... using MappedType


// ------------
// ------------ Type Guards
// ------------
// Type Guards allow you to check the type of a variable or an object with an operator.
// It's a conditional block that returns a type using typeof, instanceof, or in.
function showType(x: number | string) {
    if (typeof x === "number") {
      return `The result is ${x + x}`
    }
    throw new Error(`This operation can't be done on a ${typeof x}`)
  }
  
  showType("I'm not a number")
  // Error: This operation can't be done on a string
  
  showType(7)
  // Output: The result is 14

  //-------------
  class Foo {
    bar() {
      return "Hello World"
    }
  }
  
  class Bar {
    baz = "123"
  }
  
  function showType(arg: Foo | Bar) {
    if (arg instanceof Foo) {
      console.log(arg.bar())
      return arg.bar()
    }
  
    throw new Error("The type is not supported")
  }
  
  showType(new Foo())
  // Output: Hello World
  
  showType(new Bar())
  // Error: The type is not supported

  //--------------
  interface FirstType {
    x: number
  }
  interface SecondType {
    y: string
  }
  
  function showType(arg: FirstType | SecondType) {
    if ("x" in arg) {
      console.log(`The property ${arg.x} exists`)
      return `The property ${arg.x} exists`
    }
    throw new Error("This type is not expected")
  }
  
  showType({ x: 7 })
  // Output: The property 7 exists
  
  showType({ y: "ccc" })
  // Error: This type is not expected


  // ------------- Conditional Types
// Conditional types test two types and select one of them depending on the outcome of that test.
type NonNullable<T> = T extends null | undefined ? never : T









