var num1=10,num2=30,num3=10;
if (num1>num2 & num1>num3) {
    if (num2>num3) {
        console.log(`${num2} is the 2nd largest`);
    } else {
        console.log(`${num3} is the 2nd largest`);
    }
} 
else if(num2>num1 & num2>num3){
    if (num1>num3) {
        console.log(`${num1} is the 2nd largest`);
    } else {
        console.log(`${num3} is the 2nd largest`);
    }  
}
else if(num3>num1 & num3>num2){
    if (num1>num2) {
        console.log(`${num1} is the 2nd largest`);
    } else {
        console.log(`${num2} is the 2nd largest`);
    }
}
else if(num1==num2 & num1==num3){
    console.log("all 3 numbers are equal");
}