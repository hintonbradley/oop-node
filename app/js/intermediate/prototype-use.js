const Dog = function (name, food)  {
    this.name = name;
    this.food = food;
}

const rover = new Dog ('Rover','Alpo');

const max = new Dog ('Max','Pedigree');

console.log(rover);
console.log(max)

Dog.prototype.eat = function() {
    console.log(this.name + " is now eating " + this.food)
  };