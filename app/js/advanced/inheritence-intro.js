function Parallelogram() {
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
};

Square.prototype = Object.create(Parallelogram.prototype);
Square.prototype.constructor = Square;

let spongeBob = new Square();