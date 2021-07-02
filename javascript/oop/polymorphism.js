//many forms=> polymorphism
//method overloading =>same method name diff num of parameters
//method overriding


//method overloading
class Calculation{
    add(){
        console.log("inside no arg");
    }
    add(num1){
        console.log("inside 1 arg");
    }
    add(num1,num2){
        console.log("inside 2 arg");
    }
}
var calc=new Calculation();
calc.add();
calc.add(10);
calc.add(10,20);



//method overriding
class Parent{
    phone(){
        console.log("");
    }
}
class Child{

}
var child=new Child();
child.phone();





//shape 
class Rectangle{
    
}