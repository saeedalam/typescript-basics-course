import { count } from "console";

function toTitleCase(str: string): string {
  return str
    .split(" ")
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1, word.length))
    .join(" ");
}

function countWords(str :string):number {
    return str.split(/-|_| /).length
}

function toWords(str :string):string[] {
    return str.split(/-|_| /)
}

console.log(toTitleCase("saeed valipour alam"));
console.log(toTitleCase("this is only a test to see if the to title case function works or Not"));

console.log(countWords("saeed valipour alam"));
console.log(countWords("saeed-valipour_alam"));
console.log(countWords("saeed valipour_alam-test"));

console.log(toWords("saeed valipour_alam-test"));