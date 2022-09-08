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