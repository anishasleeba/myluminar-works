//array methods
//arrowfunction
let add=(num1,num2)=>num1+num2;// if mutiple lines we have to use return and  also curly braces
let sub=(num1,num2)=>num1-num2;
let cube=num=>num**3;


//create arrow fumction that return odd or even 
let oddreven=num=>num%2==0?"even":"odd"
console.log(cube(3));

// diff array methods map(),filter(),sort(),reduce(),find(),some(),forEach()

//find odd numbs from arrays
var arr=[3,4,5,6,7,8,9];
var even=arr.filter(num=>num%2==0)
console.log(even);