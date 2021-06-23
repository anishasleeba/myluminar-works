//[100, ram, bca, 450]

var student = { id: 100, name: "Ram", course: "BCA", total: 450 }

// key=> id,name,course,total

//print name 
console.log(student["name"]);   // 1st method
console.log(student.name);  // 2nd method

//updation
student.total = 500;
console.log(student);

//check for gender key is present 

console.log("gender" in student);


//add value to student

student["gender"]="Male";
console.log(student);

// student total marks subtract 50 marks

student.total-=50;     // student.total=student["total"]-50;
console.log(student);

