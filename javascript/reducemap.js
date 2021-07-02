//2 params needed 

//total
var arr=[3,4,2,8,7,9];
var tot=arr.reduce((num1,num2)=>num1+num2);
console.log(tot);


//max
var max=arr.reduce((num1,num2)=>num1>num2?num1:num2);
console.log(max);

//min
var min=arr.reduce((num1,num2)=>num1>num2?num2:num1);
console.log(min);