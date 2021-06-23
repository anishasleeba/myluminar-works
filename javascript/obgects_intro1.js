// data strutures

// values are stored in key value pairs for easy identification of an element in a object

//fast processing

// objects are defined using {}


var employee={id:1000,name:"Ajay",desig:"Developer",salary:25000,exp:2}; // easy to access values in object data set with key value pair

// values are fetch using corresponding key value

//print employee id
console.log(employee["id"]);
//print employee name
console.log(employee["name"]);
//print employee salary
console.log(employee["salary"]);

// another way to fetch 

console.log(employee.exp); 


// update employee salary as 300000
employee["salary"]=30000;
console.log(employee["name"],employee["salary"]);

employee.salary=35000;
console.log(employee.name,employee.salary);
