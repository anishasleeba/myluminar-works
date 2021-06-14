var num=123;
var p=0;
var res="";
while (num!=0) {
    let digit=num%10;
    // console.log(temp);
    res+=digit;
    num=Math.floor(num/10);
}
console.log(res);

