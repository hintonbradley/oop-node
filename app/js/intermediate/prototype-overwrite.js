const Dog = function (name, food)  {
    this.name = name;
    this.food = food;
}

const rover = new Dog ('Rover','Alpo');
console.log(rover);

console.log("before changing Dog.prototype.toString method, rover.toString() is: ", rover.toString());

Dog.prototype.toString = function() {
    return "This built in Javascript method has been altered"
};

console.log("after changing Dog.prototype.toString method, rover.toString() is: ", rover.toString());