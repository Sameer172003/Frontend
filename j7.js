// console.log("Hi there");
// setTimeout(()=>{
//     console.log("Apna college");
// }, 4000);
// console.log("welcome to");

// setInterval(()=>{
//     console.log("Apna college");
// }, 2000);

// let sq=(n)=>{
//     return (n*n);
// };
// console.log(sq(3));

// write a program that prints Hello world 5 times

let id=setInterval(()=>{
    console.log("Hello world");
},2000);
setTimeout(()=>{
    clearInterval(id);
},12000);