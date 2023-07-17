function identity<T>(arg: T): T {
    return arg;
}

const result = identity<string>('Hello');
console.log(result); // Output: 'Hello'

//-----
function mapArray<T, U>(array: T[], callback: (item: T) => U): U[] {
    return array.map(callback);
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = mapArray(numbers, (num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

const strings = ['apple', 'banana', 'cherry'];
const uppercaseStrings = mapArray(strings, (str) => str.toUpperCase());
console.log(uppercaseStrings); // Output: ['APPLE', 'BANANA', 'CHERRY']


// --- key pair
class KeyValuePair<K, V> {
    private key: K;
    private value: V;

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
    }

    getKey(): K {
        return this.key;
    }

    getValue(): V {
        return this.value;
    }
}

const pair = new KeyValuePair<string, number>('age', 25);
console.log(pair.getKey()); // Output: 'age'
console.log(pair.getValue()); // Output: 25


// generic constraints
interface Lengthwise {
    length: number;
}

function printLength<T extends Lengthwise>(item: T): void {
    console.log(`Length: ${item.length}`);
}

const stringItem = 'Hello';
printLength(stringItem); // Output: Length: 5

const arrayItem = [1, 2, 3, 4, 5];
printLength(arrayItem); // Output: Length: 5

const numberItem = 42; // Error: Property 'length' does not exist on type 'number'
printLength(numberItem);


// ------
class DataStorage<T extends string | number> {
    private data: T[] = [];

    addItem(item: T): void {
        this.data.push(item);
    }

    removeItem(item: T): void {
        this.data = this.data.filter((x) => x !== item);
    }

    getItems(): T[] {
        return this.data;
    }
}

const storage = new DataStorage<string>();
storage.addItem('apple');
storage.addItem('banana');
storage.addItem('cherry');
console.log(storage.getItems()); // Output: ['apple', 'banana', 'cherry']

storage.removeItem('banana');
console.log(storage.getItems()); // Output: ['apple', 'cherry']
