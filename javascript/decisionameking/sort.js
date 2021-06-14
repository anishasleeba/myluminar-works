var num1 = 30, num2 = 10, num3 = 10;
var result = "The numbers in descending order: "
if (num1 > num2 & num1 > num3) {
    result += num1 + ",";
    if (num2 > num3) {
        result += num2 + "," + num3;
        console.log(result);
    } else {
        result += num3 + "," + num2;
        console.log(result);
    }
}
else if (num2 > num1 & num2 > num3) {
    result += num2 + ",";
    if (num1 > num3) {
        result += num1 + "," + num3;
        console.log(result);
    } else {
        result += num3 + "," + num1;
        console.log(result);
    }
}
else if (num3 > num1 & num3 > num2) {
    result += num3 + ",";
    if (num1 > num2) {
        result += num1 + "," + num2;
        console.log(result);
    } else {
        result += num2 + "," + num1;
        console.log(result);
    }
}
else if (num1 == num2 & num1 == num3) {
    console.log("all 3 numbers are equal");
}