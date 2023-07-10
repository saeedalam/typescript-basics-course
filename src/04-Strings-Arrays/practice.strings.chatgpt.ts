// String Functions Example

// Concatenation
const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName.concat(' ', lastName);
console.log(fullName); // Output: John Doe

// Length
const message = 'Hello, TypeScript!';
console.log(message.length); // Output: 18

// Accessing Characters
const str = 'Hello, World!';
console.log(str[0]); // Output: H

// Substring
const sentence = 'The quick brown fox jumps over the lazy dog.';
const substring = sentence.substring(4, 9);
console.log(substring); // Output: quick

// Substring with negative index
const str2 = 'Hello, World!';
const substring2 = str2.substring(7, -1);
console.log(substring2); // Output: Hello

// Substring with negative start index
const str3 = 'Hello, World!';
const substring3 = str3.substring(-5, 5);
console.log(substring3); // Output: Hello

// Substring with omitted end index
const str4 = 'Hello, World!';
const substring4 = str4.substring(7);
console.log(substring4); // Output: World!

// Substring with negative start and end index
const str5 = 'Hello, World!';
const substring5 = str5.substring(-5, -1);
console.log(substring5); // Output: Hello

// Substring with negative start and omitted end index
const str6 = 'Hello, World!';
const substring6 = str6.substring(-5);
console.log(substring6); // Output: Hello, World!

// Substring with omitted start and negative end index
const str7 = 'Hello, World!';
const substring7 = str7.substring(undefined, -7);
console.log(substring7); // Output: Hello, W

// Substring with omitted start and end index
const str8 = 'Hello, World!';
const substring8 = str8.substring(undefined, undefined);
console.log(substring8); // Output: Hello, World!

// Replace
const str9 = 'Hello, TypeScript!';
const replacedStr = str9.replace('TypeScript', 'JavaScript');
console.log(replacedStr); // Output: Hello, JavaScript!

// Replace with regular expression
const str10 = 'Hello, TypeScript!';
const replacedStr2 = str10.replace(/TypeScript/i, 'JavaScript');
console.log(replacedStr2); // Output: Hello, JavaScript!

// Replace all occurrences
const str11 = 'Hello, TypeScript!';
const replacedAllStr = str11.replaceAll('T', 'J');
console.log(replacedAllStr); // Output: Hello, Javascript!

// Upper case
const str12 = 'Hello, TypeScript!';
const upperCaseStr = str12.toUpperCase();
console.log(upperCaseStr); // Output: HELLO, TYPESCRIPT!

// Lower case
const str13 = 'Hello, TypeScript!';
const lowerCaseStr = str13.toLowerCase();
console.log(lowerCaseStr); // Output: hello, typescript!

// Trim
const str14 = '   Hello, TypeScript!   ';
const trimmedStr = str14.trim();
console.log(trimmedStr); // Output: Hello, TypeScript!

// Split
const str15 = 'Hello, TypeScript!';
const splittedStr = str15.split(' ');
console.log(splittedStr); // Output: ['Hello,', 'TypeScript!']

// Join
const arr = ['Hello,', 'TypeScript!'];
const joinedStr = arr.join(' ');
console.log(joinedStr); // Output: Hello, TypeScript!
