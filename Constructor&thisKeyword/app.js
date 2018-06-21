// In order to create multiple instances of a certain type of object, it is 
// recommended to create a Constructor (Prototype and inheritance).


//Person Constructor with one property called name. With just one line of code,
//we can instantiate a person object from this. To instantiate the object
//it is used the new keyword. Also we can create a method within the Constructor
// A method is a function which is inside of an object (calculateAge)
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  // console.log(this);
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const diff = Date.now()  - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  
}
// const brad = new Person('Brad', 35);
// const john = new Person('John', 30);
// 
// console.log(john.age);

//this keyword refers to the current instance of the object, in this case it 
//refers to the person, it refers to this function scope.

const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());

// the point of doing this is to have a method within the constructor