// --- General array printer ---
class ArrayPrinter<T> {
    private arr: T;
    constructor(input: T) {
        this.arr = input
    }

    print() {
        console.log(this.arr)
    }
}

const numbs = [1, 2, 3, 4]
const arrayPrinter = new ArrayPrinter<number[]>(numbs);
arrayPrinter.print();

const strs = ["Adrian", "Zahra", "Saeed"]
const arrayPrinter2 = new ArrayPrinter<string[]>(strs)
arrayPrinter2.print()


// ---- stack ----
class Stack<T>{
    private data: T[];

    constructor() {
        this.data = []
    }

    public push(item: T) {
        this.data.push(item)
    }

    public pop(): T | undefined {
        return this.data.pop()
    }

    public print() {
        console.log(this.data)
    }
}

const stack = new Stack<number>()
stack.push(10)
stack.push(100)
stack.pop()
stack.push(230)
stack.print()

const stringStack = new Stack<string>();
stringStack.push('apple');
stringStack.push('banana');
stringStack.push('cherry');
// console.log(stringStack);

//------
function intersect<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.filter(item => arr2.includes(item))
}

const itersected = intersect<number>([1, 2, 4, 5, 6], [2, 3, 7, 4, 8, 9])
// console.log(itersected)

//------ Array map
function map<T, U>(data: T[], callback: (item: T) => U): U[] {
    return data.map(callback)
}

const mapped = map<number, number>([1, 2, 3], (item) => item * 2)
// console.log(mapped)

const mapped2 = map<string, number>(["13", "23", "33"], (item) => Number(item))
// console.log(mapped2)

//------ Array filter
function arrayFilter<T, U>(input: T[], callback: (item: T) => U): T[] {
    return input.filter(callback)
}

const filtered = arrayFilter([1, 2, 3, 4], (item) => item % 2 === 0)
// console.log(filtered)

const filtered2 = arrayFilter<string, boolean>(["Adrian", "Zahra", "Saeed"], (item: string) => item.length > 5)
// console.log(filtered2)


// --- unique array
function uniqueArray<T>(input: T[]): T[] {
    return Array.from(new Set(input))
}
const uni = uniqueArray([1, 2, 3, 3, 4, 5, 5, 5]);
console.log(uni)

const uni2 = uniqueArray(["a", "b", "c", "a", "b"])
console.log(uni2)

// ----- Capitalizer
function capt(input: string): string {
    const result = input.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
    console.log(result)
    return ""
}
capt("hello i am saeed")

//------
function checkArrayEquality<T>(arr1: T[], arr2: T[]): boolean {
    if (arr1.length !== arr2.length) return false;

    for (let index in arr1) {
        if (arr2[index] !== arr1[index])
            return false;
    }

    return true
}

console.log(checkArrayEquality([1, 2, 3], [1, 2, 5]))

//----
function checkAnagram(str1: string, str2: string): boolean {
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}

// Example usage:
const word1 = 'listen';
const word2 = 'silent';
console.log(checkAnagram(word1, word2)); // Output: true

//----- sum of even numbers
function sumOfEvenNumbers(numbers:number[]) : number {
    return numbers.filter(num => num % 2 === 0).reduce((total , val) => total + val , 0)
}
console.log(sumOfEvenNumbers([1,2,3,4,5,6]))