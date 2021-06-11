// var num1=15;
// if ( num1 % 15==0) {
//     console.log("fizbuz");
// } 
// else if(num1 % 3 == 0){
//     console.log("fiz");  
// }
// else if(num1 % 5 ==0){
//     console.log("bux");
// } 
var res="";
var num=15;
if(num %3==0){
    res+="fiz";
}
if(num %5==0){
    res+="buz";
}
console.log(res);