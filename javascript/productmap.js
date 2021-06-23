var products=[
    {code:1000,name:"garlic",mrp:120,aval_qty:10},
    {code:1001,name:"chilly",mrp:80,aval_qty:5},
    {code:1002,name:"tomatto",mrp:35,aval_qty:20},
    {code:1003,name:"onion",mrp:40,aval_qty:37},
    {code:1004,name:"potatto",mrp:45,aval_qty:40},
    {code:1005,name:"banana",mrp:55,aval_qty:60},
    {code:1006,name:"brinjal",mrp:43,aval_qty:2},
    {code:1007,name:"beetroot",mrp:38,aval_qty:5},
    {code:1008,name:"carrot",mrp:60,aval_qty:0},
    {code:1009,name:"bittergod",mrp:50,aval_qty:5},
]
//print all productname n this shop
var products_name=products.map(obj=>obj.name)
console.log(products_name);

//print all product names in upper case
var uppercase=products.map(upper=>upper.name.toUpperCase())
console.log(uppercase);


var p_name=products_name.map(name=>name.toUpperCase())
console.log(p_name);


//print all pdts less than 50
var below_fifty=products.filter(item=>item.mrp<50)
console.log(below_fifty);

//print all items in range 30 to 50
var between_thrityfifty=products.filter(item=>item.mrp)
console.log(below_fifty);