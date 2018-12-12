
function Circle(radius) {
    // public variable
    this.radius = radius;

    // private variable
    let defaultLocation = 'center';

    // To define a getter/setter, use Object.defineProperty():
    Object.defineProperty(this, 'defaultLocation', {
        get: function() { return defaultLocation; },
        set: function(value) { defaultLocation = value; }
    });
}

const circle3 = new Circle(1);