class Parent{
    m1(){
        console.log("parent");
    }
}
class Child extends Parent{
    m2(){
        console.log("subchild");
    }
}
class SubChild extends Child{
    m3(){
        console.log("child");
    }
}
var sub=new SubChild();
sub.m3();
sub.m2();
sub.m1();


var child=new Child();
child.m1();
child.m2();
//child.m3();error

var parent= new Parent();
//parent.m1();error
//parent.m2();error
parent.m3();

//javascript doesnt support multiple inheritence. only one class can be extended
