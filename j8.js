// Maximum number in an array (using loop)

let arr=[1,2,3,4,5,6];
let max=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(max);

// Maximum number in an array (using reduce function)

let arr1=[2,1,4,3,5,8];
let ans=arr1.reduce((max,el)=>{
    if(max < el){
        return el;
    }
    else{
        return max;
    }
});
console.log(ans);