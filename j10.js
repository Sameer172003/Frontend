/* Rest: - Allows a function to take an indefinite number of arguments and bundle
them in an array 

Destructuring :- Storing values of array into multiple variables.*/
// For array literals

let names=["sameer","ram","shyam","akhil"];
let [winner, runnerUp]=names;
console.log(winner,runnerUp);

let arr=["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"];
let [win,lose,...others]=arr;
console.log(win,lose);

// For object literals

const student={
    name:"sameer",
    age:20,
    branch:"ECE",
    year:4,
    username:"Sameer2328",
    password:"Sameer@2003"
};

let {username,password}=student;
console.log(username,password);

