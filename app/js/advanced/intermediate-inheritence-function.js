
function Parallelogram(color) { 
    this.color = color; 
    this.fourSides = true; 
    this.oppositeEqualSides = true; 
    this.oppositeAnglesEqual = true; 
  }; 

Parallelogram.prototype.countSides = function () {
    return 4;
}

function Square() { 
    this.allSidesEqual = true; 
    this.angleDegrees = 90;
    Parallelogram.call(this, 'yellow') 
  };

function Rectangle() { 
    this.oppositeSidesEqual = true; 
    this.angleDegrees = 90;
    Parallelogram.call(this, 'red')
  };

// Writing code to have Square inherit Parallelogram's members
// Square.prototype = Object.create(Parallelogram.prototype);
// Square.prototype.constructor = Square;

// Duplicating code to have Rectangle inherit Parallelogram's members
// Rectangle.prototype = Object.create(Parallelogram.prototype);
// Rectangle.prototype.constructor = Rectangle;

// Intead, we create a intermediate function to take care of all inheritence between Constructors: 
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

extend(Square, Parallelogram);
extend(Rectangle, Parallelogram);

let spongeBob = new Square();
let myRectangle = new Rectangle();





  