// STEP 1.1: CREATING AN OBJECT USING OBJECT LITERAL NOTATION
const circle1 = {
    // properties:
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    // methods:
    show: function () {
        console.log('Showing an Object Literal Notation circle');
    }
};

circle1.show();

for (let key in circle1) {
    console.log(key, circle1[key]);
}

const keys = Object.keys(circle1);
console.log('keys is: ',keys);

// To find if a property is in an object:
if ('radius' in circle3) {
    console.log('Circle has a radius');
}