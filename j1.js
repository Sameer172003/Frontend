// alert("Warning");
let a=prompt("Enter your first name");
let b=prompt("Enter your last name");
console.log(`Welcome ${a} ${b}`);
console.error("Warning");
console.warn("Network Error");

// Trim (To eliminate extra spaces in string)
let msg="    Sameer";
console.log(msg.trim());
// toUpperCase and toLowerCase
let firstname="SAMEER";
let secondname="ojha";
console.log(firstname.toLowerCase());
console.log(secondname.toUpperCase());
// indexOf (Finding letter index in a string)
let str="ilovecoding";
console.log(str.indexOf("i"));
// slice(Give the string between two given indexes)
let msg1="HelloSameer";
console.log(msg1.slice(5,11));
// Replace (Interchange the word and return it)
console.log(msg1.replace("Hello","Hey"));
// Repeat(Repeat the string)
console.log(str.repeat(3));