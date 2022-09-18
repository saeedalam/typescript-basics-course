let _str:string = "Typescript";

_str.charAt(1); // y
_str.split(""); //["T", "y", "p", "e", "s", "c", "r", "i", "p", "t"]
_str.indexOf("s"); //4 , gives -1 is the value does not exist in the string.
_str.replace("Type", "Coffee"); //"Coffeescript"
_str.trim(); //"Typescript"
_str.substr(4, _str.length); //"script"
_str.substring(4, 10); //"script"
_str.toUpperCase();//"TYPESCRIPT"
_str.toLowerCase();//"typescript"


type Hello = 'Hello'
type HelloWorld = `${Hello}World`
type LowerCaseHelloWorld = Lowercase<HelloWorld>
type UpercaseHelloWorld = Uppercase<HelloWorld>
type CapitlaHelloWorld = Capitalize<LowerCaseHelloWorld>

let hi:Hello = "Hello"
let hw:HelloWorld = "HelloWorld"
let lchw:LowerCaseHelloWorld = "helloworld"
let uchw:UpercaseHelloWorld = "HELLOWORLD"
let chw:CapitlaHelloWorld = "Helloworld"


type Colors = "Red" | "Green" | "Blue"
type Numbers = "One" | "Two" | "Three"
type ColorsNumbers = `${Colors}-${Numbers}`

type Split<S extends string , D extends string> =
    S extends `${infer T}${D}${infer U}`
        ? [T , ...Split<U,D>]
        : [S]
type myStrs = Split<"He llo Wor ld" , " " >

