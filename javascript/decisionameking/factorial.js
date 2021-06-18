//factorial
// var num=3;
// var temp=1;
// while (num>=1) {
//     temp*=num;
//     num--;
// }
// console.log(temp);



//armstrong number
// var num=153;
// var p=0;
// var res="";
// while (num!=0) {
//     let digit=num%10;
//     p+=digit**3;
//     num=Math.floor(num/10);
// }
// console.log(p);


//sum of odd numbers
// var i=10;
// var sum=0;
// while (i<=50) {
//     if (i%2!=0) {
//         sum+=i;
//         console.log(i);
//     }   
//     i++; 
// }
// console.log(sum);



//fibonacci series
var i = 1;
var a = 0;
var b = 1;
var c=0;
var string = "";
while (i <= 9) {
    string+=",";
    c = a+b;
    a=b;
    b=c;
    string += c;
    i++;
}
console.log(`0,1${string}`);