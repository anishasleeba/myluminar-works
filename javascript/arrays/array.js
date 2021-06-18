// var expenses=[20,25,30,27,30,30];
// expenses[1]=30;
// console.log(expenses);
// for(let i=0;i<expenses.length;i++){
//     console.log(expenses[i]);
// }




//adding a value 
// var expenses=[20,25,30,27,30,30];
// expenses[3]+=3;
// console.log(expenses);



//diff for loop
// var expenses=[20,25,30,27,30,30];
// for(let amount of expenses){
//     console.log(amount);
// }



//greater than 25
// var expenses=[20,25,30,27,30,30];
// for(let exp of expenses){
//     if (exp>25) {
//         console.log(exp);
//     }
// }



//print all even nums frm array
// var arr=[10,11,12,13,14,15,16];
// for(let exp of arr){
//     if (exp%2==0) {
//         console.log(exp);
//     }
// }




//sum of array
// var arr=[10,11,12,13,14,15,16];
// var sum=0;
// for(let num of arr){
//     sum+=num;
// }
// console.log(sum);




//insert an element at end
// var arr=[10,11,12,13,14,15,16];
// arr.push(100);
// console.log(arr);



//delete an element
// var arr=[10,11,12,13,14,15,16];
// arr.pop();
// console.log(arr);


//create odd and even array 
var arr=[10,11,12,13,14,15,16];
var odd=[];
var even=[];
for(let num of arr){
    if(num%2==0){
        even.push(num);
    }
    else{
        odd.push(num);
    }
}
console.log(odd);
console.log(even);