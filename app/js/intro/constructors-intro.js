function Car(make, model) {
    // Public members 
    this.make = make;
    this.model = model;
    this.accelerate = function() {
        console.log('This ' + this.model + ' is accelerating to 60mph.');
    }
    // Private members
    const engine = 'gasoline';
    let driver = 'Michael Knight';

    // To define a getter/setter, use Object.defineProperty():
    Object.defineProperty(this, 'engine', { 
        get: function() { return engine; },
    });

    Object.defineProperty(this, 'driver', { 
        get: function() { return driver; },
        set: function (val) { driver = val}
    });
};

const kitt = new Car('Pontiac','Trans Am');
kitt.accelerate();


let myString = 'This is a string';
let myConstructorString = new String ('This is also a string');
console.log(myString.constructor);
console.log(myConstructorString.constructor);
console.log(myString.constructor===myConstructorString.constructor);

let myNumber = 8675309;
let myConstructorNumber = new Number(8675309);
console.log(myNumber.constructor, myConstructorNumber.constructor)

let myFunction = function (value) {
    console.log(value);
}

let myConstructorFunction = new Function ('value', `console.log(value);`);

console.log(myFunction.constructor, myConstructorFunction.constructor);


let burgerKing = {
    restaurant: 'Burger King',
    food: 'Whopper',
    placeOrder: function () {
        console.log("I'm at " + this.restaurant + " so I'll have a " + this.food)
    },
    orderDrink: function (liquid) {
        console.log("I'll have a " + liquid + ' with my ' + this.food)
    }
}

let mcDonalds = {
    restaurant: 'McDonalds',
    food: 'Big Mac',
    orderFood: burgerKing.placeOrder
}

burgerKing.placeOrder.call(mcDonalds);
burgerKing.orderDrink.apply(mcDonalds, ['Coke'])