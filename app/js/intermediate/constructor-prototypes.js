
//Creating an object and getting it's constructor:
let myObj = {};
let myObjProto = Object.getPrototypeOf(myObj);

//Javascript's built in Object Constructor:
let objProto = Object.prototype

// Both constructors are one and the same:
console.log(objProto===myObjProto, myObjProto)


// Same principles goes for all Javascript Constructors:
let myArr = [];
console.log(Object.getPrototypeOf(myArr)===Array.prototype);

// Creating a new Constructor function
const Dog = function (name) {
    this.name = name;
}
// creating a new dog using the new constructor function
let rover = new Dog('rover');

// rover's prototype is not Javascript's Object.prototype, but instead Dog.prototype
console.log('rover.__proto__ === Object.prototype?', Object.getPrototypeOf(rover)===Object.prototype);
console.log('rover.__proto__ === Dog.prototype?', Object.getPrototypeOf(rover)===Dog.prototype);
