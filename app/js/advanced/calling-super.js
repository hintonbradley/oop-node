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

Square.prototype = Object.create(Parallelogram.prototype);
Square.prototype.constructor = Square;

let spongeBob = new Square();







function Person (name) {
    this.name = name;
    this.alive = true;
  }
  
  function Child () {
    this.under10 = true;
  }
  
  Person.prototype.eat = function () {
    return this.name + ' is eating food.';
  }
  
  // Correctly...
  var jason = new Person('jason');
  console.log('Jason as Person ', jason);
  // using call method to point 'this' keyword to the jason instance object
  Child.call(jason);
  console.log('jason as Child ', jason)
  
  // Incorrectly...
  var sue = new Person('sue');
  console.log('sue as Person ', sue)
  // overwriting the sue object to create a new empty object to point 'this' to
  sue = new Child();
  console.log('sue as Child ', sue);
  