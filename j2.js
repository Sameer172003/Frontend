let marks=[99,98,67,78];
console.log(marks);
console.log(marks.length);
let arr=["sameer",79,84,"ojha"];
console.log(arr[0]);
console.log(arr[0][0]);

// Push (Add to end)
marks.push(90);
// Unshift (Add to start)
marks.unshift(100);
// Pop (Delete from end)
marks.pop();
// Shift (Delete from start)
marks.shift();
console.log(marks);
// indexOf (return index if present else return -1)
console.log(marks.indexOf(99));
// includes (True/False)
console.log(marks.includes(100));
// Concatenation
let price1=[10,11,12];
let price2=[13,14,15];
console.log(price1.concat(price2));
// Reverse an array
let array=[1,2,3,4,5,6,7];
console.log(array.reverse());
// Slice Method
console.log(array.slice(2));
console.log(array.slice(-3));
// Splice Method
console.log(array.splice(0,2,9,10));
// Sort Method
let num=[2,1,5,3,4];
console.log(num.sort());
// Nested Array
let nums=[[1,2,3],[4,5,6],[7,8,9]];
console.log(nums);