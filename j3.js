// create and display for loop
for(let i=0;i<=10;i++){
    console.log(i);
}
// Print odd number and even number between 1-20
let even=[];
let odd=[];
for(let i=1;i<=20;i++){
    if(i%2 == 0){
        even.push(i);
    }
    else{
        odd.push(i);
    }
}
console.log(even);
console.log(odd);
// Infinite Loop

/* let i=1;
// for(;;){
//     console.log(i);
}*/

// Multiplication Table
for(let i=1;i<=10;i++){
    console.log(`2 X ${i} = ${2*i}`);
}
// while loop
let i=0;
while(i<=10){
    console.log(i);
    i++;
}

// for of loop
let arr=[1,2,3,4,5,6,7,8];
for(a of arr){
    console.log(a);
}