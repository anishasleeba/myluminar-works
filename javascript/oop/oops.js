//class 
class Student {

    constructor(rol, name, course, tot) {

        //this.name -> called as instance variable
        //to access variable inside class we use this
        //to access variable outside class we use refrence name.
        //rol,name,course etc inside the setStudent is local variable scope is inside function only
        //
        //setStudent initilaze the instance variable
        //constructor duty- initialize instance variable
        this.rol = rol;
        this.name = name;
        this.course = course;
        this.tot = tot;
    }
    printDetails() {
        console.log(this.rol, this.name, this.course, this.tot);
    }
}

var stud1 = new Student();
stud1.printDetails(1, "ram", "science", 5);

