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


function reverseString(input: string): string {
    return input.split('').reverse().join('');
  }
  
  // Example usage:
  console.log(reverseString('Hello')); // Output: olleH


  function isPalindrome(input: string): boolean {
    const formattedInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedInput = formattedInput.split('').reverse().join('');
    return formattedInput === reversedInput;
  }
  
  // Example usage:
  console.log(isPalindrome('racecar')); // Output: true
  console.log(isPalindrome('Hello')); // Output: false

  
  function findLongestWord(sentence: string): string {
    const words = sentence.split(' ');
    let longestWord = '';
  
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }
  
  // Example usage:
  console.log(findLongestWord('The quick brown fox jumps over the lazy dog')); // Output: jumps

  


  function countOccurrences(input: string, char: string): number {
    let count = 0;
  
    for (const c of input) {
      if (c === char) {
        count++;
      }
    }
  
    return count;
  }
  // Example usage:
  console.log(countOccurrences('Hello, world!', 'o')); // Output: 2

  


  function removeDuplicates(arr: string[]): string[] {
    return Array.from(new Set(arr));
  }
  
  // Example usage:
  const strings = ['apple', 'banana', 'cherry', 'apple', 'durian', 'banana'];
  console.log(removeDuplicates(strings)); // Output: ['apple', 'banana', 'cherry', 'durian']
  


  function findSum(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  console.log(findSum(numbers)); // Output: 15

  



  function countEvenNumbers(numbers: number[]): number {
    return numbers.filter((num) => num % 2 === 0).length;
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5, 6];
  console.log(countEvenNumbers(numbers)); // Output: 3

  

  function findCommonElements(arr1: number[], arr2: number[]): number[] {
    return arr1.filter((num) => arr2.includes(num));
  }
  
  // Example usage:
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [4, 5, 6, 7, 8];
  console.log(findCommonElements(arr1, arr2)); // Output: [4, 5]
  

  function findCommonElements(arr1: number[], arr2: number[]): number[] {
    return arr1.filter((num) => arr2.includes(num));
  }
  
  // Example usage:
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [4, 5, 6, 7, 8];
  console.log(findCommonElements(arr1, arr2)); // Output: [4, 5]
  