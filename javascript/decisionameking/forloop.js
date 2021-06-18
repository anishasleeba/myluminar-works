//display 10 to 1 
// for(let i=10;i>=1;i--){
//     console.log(i);
// }



//check prime number
// var num=16;
// var flag=0;
// for(let i=2;i<num;i++){
//     if (num%i==0) {
//         flag+=1;
//     } 
// }
// if (flag==0) {
//     console.log("prime number");
// } else {
//     console.log("not a prime number");
// }



//print all prime nums frm 3 to 25
var low = 21;
var up = 40;
for (let num = low; num <= up; num++) {
    let flag=0;
    for (let j = 2; j < num; j++) {
        if (num % j == 0) {
            flag++;
            break;
        }
    }
    if (flag==0) {
        console.log(num);
    }
}