
function Shape(color) {
    this.color = color;
};

Shape.prototype.findMinNumberOfSides = function () {
    let minSides = 3;
    //count sides and return number of sides:
    return sides;
}

function Square () {
    this.allSidesEqual = true;
    this.angleDegrees = 90;
    Shape.call(this, 'red') 
};

function Circle (color, radius) {
    this.noSides = true;
    this.radius = radius;
    Shape.call(this, color) 
};

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

extend(Square, Shape);
extend(Circle, Shape);

// To override a method on the prototype, we must first change the prototype with the extends function and then update the method on the prototype.
Circle.prototype.findNumberOfSides = function () {
    return "A circle has 0 sides"
}

let spongeBob = new Square('yellow');
let morty = new Circle('tan, 3');

console.log(spongeBob.findMinNumberOfSides())
console.log(morty.findMinNumberOfSides())