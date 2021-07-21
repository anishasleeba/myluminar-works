//class 
//this.name -> called as instance variable
//to access variable inside class we use this
//to access variable outside class we use refrence name.
//rol,name,course etc inside the setStudent is local variable scope is inside function only
//duty of setStudent initilaze the instance variable
//constructor duty- initialize instance variable 
//constructor name same as classname in java and c++
//constructor name same in js
//in python it is _initi_()
//constructor will be automatically invoked during object creation
class Student {

    constructor(role, names, courses, total) {

        this.rol = role;
        this.name = names;
        this.course = courses;
        this.tot = total;
    }
    printDetails() {
       // console.log(this.rol, this.name, this.course, this.tot);
    }
}

var stud1 = new Student(1, "ram", "science", 5);
stud1.printDetails();




//old way
class Student {
    setStudent(rol, name, course, total) {
        this.rol = rol;
        this.name = name;
        this.course = course;
        this.total = total;
    }
    printDetails() {
        //console.log(this.rol, this.name, this.course, this.total);
    }
}
var stud = new Student();
stud.setStudent(23, "anisha", "bca", 145);
stud.printDetails();
//console.log(stud.name);
