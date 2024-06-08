// Spread: - Expands an iterable into multiple values
// Array literals
let arr=[1,2,3,4,5];
let ans=Math.min(...arr);
console.log(ans);

console.log(...arr);

console.log(..."sameer");

let arr1=[1,2,3,4,5];
let arr2=[...arr1];
console.log(...arr2);

let chars=[..."sameer"];
console.log(...chars);

let odd=[1,3,5,7,9];
let even=[2,4,6,8,10];
let newarr=[...odd,...even];
console.log(...newarr);

// object literals

const data={
    email:"ojhasameer24@gmail.com",
    password:"Sameer@2003"
};

const datacopy={...data,id:123};
console.log(datacopy);