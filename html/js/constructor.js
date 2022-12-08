
//classes in Javascript constructor: 

// constructor function: User and give it pass parameter arguments name, age, location
// function User(name, age, location) {
//   this.name = name;//polymorphy
//   this.age = age;
//   this.location = location;

//   //create a variable 
//   const student = new User("Vlad", 25, "Bay Area");
//   const student2 = new User("MJ", 23, "Chicago");
// }
// // console.log(student.name)
// // console.log(student.name)
// // console.log(studemt.location)
// student.name;
// student.age;
// studemt.location;


// student2.name;
// student2.age;
// studemt2.location;


class Student {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
}

const student3 = new Student("Vlad", 25, "California");

student3.name;

console.log(student3.name);
console.log(student3.age);
console.log(student3.location);


