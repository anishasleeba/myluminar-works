var products = [
    { code: 1000, name: "garlic", mrp: 120, aval_qty: 10 },
    { code: 1001, name: "chilly", mrp: 80, aval_qty: 5 },
    { code: 1002, name: "tomato", mrp: 35, aval_qty: 20 },
    { code: 1003, name: "onion", mrp: 40, aval_qty: 37 },
    { code: 1004, name: "potato", mrp: 45, aval_qty: 40 },
    { code: 1005, name: "banana", mrp: 55, aval_qty: 60 },
    { code: 1006, name: "brinjal", mrp: 43, aval_qty: 2 },
    { code: 1007, name: "beetroot", mrp: 38, aval_qty: 5 },
    { code: 1008, name: "carrot", mrp: 60, aval_qty: 0 },
    { code: 1009, name: "bittergod", mrp: 50, aval_qty: 5 },
]

//map
//print all productname n this shop
var products_name = products.map(obj => obj.name)
// console.log(products_name);

//print all product names in upper case
var uppercase = products.map(upper => upper.name.toUpperCase())
//console.log(uppercase);


var p_name = products_name.map(name => name.toUpperCase())
//console.log(p_name);


//filter
//print all pdts less than 50
var below_fifty = products.filter(item => item.mrp < 50)
//console.log(below_fifty);

//print all items in range 30 to 50
var between_thrityfifty = products.filter(item => item.mrp < 50 & item.mrp > 30)
//console.log(between_thrityfifty);


//print out of stock pdts
var outfstock = products.filter(item => item.aval_qty == 0)
//console.log(outfstock);


//reduce
//print costly pdt
var costly = products.reduce((item1, item2) => item1.mrp > item2.mrp ? item1 : item2);
//console.log(costly);


//print low cost pdt
var lesscost = products.reduce((item1, item2) => item1.mrp > item2.mrp ? item2 : item1);
//console.log(lesscost);


//sorting
//sorted pdt upon avl qnty asceding order
var sorta = products.sort((item1, item2) => item1.aval_qty - item2.aval_qty);
//console.log(sorta);

//sorted pdt upon avl qnty descending order
var sortd = products.sort((item1, item2) => item2.aval_qty - item1.aval_qty);
//console.log(sortd);


//find retains only the 1st match but in filter all the possible matches are retained !important 
//searching potato
var potato = products.find(item1 => item1.name == "potato");
//console.log(potato);



//some
var availableforthirty = products.some(item => item.mrp <= 30);
//console.log(availableforthirty);


//for each upon sort
//products.sort((item1,item2)=>item1.aval_qty-item2.aval_qty).forEach(item=>console.log(item));


//to print avl quant pdts after sorting
products.sort((item1, item2) => item1.aval_qty - item2.aval_qty).forEach(item => {
    if (item.aval_qty > 0) {
        //console.log(item);
    }
});


// var arr=[4,3,2,7,8,9]
// var five=arr.map(num=>num<5?num-1:num+1);
// console.log(five);




