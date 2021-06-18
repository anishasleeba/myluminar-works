var num1 = 27;
var num2 = 9;
var temp = 0;
var num = 0;
var flag = 1;
if (num1 > num2) {
    num = num2;
} else {
    num = num1;
}
for (let i = 2; i <= num; i++) {
    if (num1 % i == 0) {
        if (num2 % i == 0) {
            if (temp <= i) {
                temp = i;
                flag = 0;
            }
        }
    }
}
if (flag == 1) {
    console.log(flag);
} else {
    console.log(temp);
}
