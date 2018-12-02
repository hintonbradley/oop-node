// STEP 1.1: CREATING AN OBJECT USING OBJECT LITERAL NOTATION
const circle1 = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    show: function () {
        console.log('Showing an Object Literal circle');
    }
};  
circle1.show();

// STEP 1.2: CREATING A FACTORY INSTEAD OF THE ABOVE OBJECT SO WE CAN CREATE MULTIPLE CIRCLES
function createCircle (radius) {
    return {
        radius,
        draw: function() {
            console.log('Drawing a Factory instansiated circle');
        }
    }
}
const circle2 = createCircle(1);
circle2.draw();

// STEP 1.3: CREATING A CONSTRUCTOR TO CREATE MULTIPLE CIRCLES
function Circle(radius) {
    // If the new keyword is used, this should reference the new object created.
    console.log('Inside any instance of a constructor, "this" is: ', this);
    this.radius = radius;
    this.create = function() {
        console.log('Creating an instance of a circle from a constructor.');
    }
    this.showThis = function () {
        console.log('this is:', this)
    }
}
const circle3 = new Circle(1);
circle3.create();
console.log(circle3.showThis);
