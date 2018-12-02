let burgerKing = {
    restaurant: 'Burger King',
    food: 'Whopper',
    placeOrder: function () {
        console.log("I'm at " + this.restaurant + " so I'll have a " + this.food)
    }
}

let mcDonalds = {
    restaurant: 'McDonalds',
    food: 'Big Mac',
    orderFood: burgerKing.placeOrder
}

burgerKing.placeOrder();
mcDonalds.orderFood();

// mcDonalds.orderFood();


let john = {
    name: 'John',
    age: '28',
    logThis: function () {
        console.log('in the Person constructor, "this" refers to: ', this);
    },
    sister: {
        name: 'Sue',
        age: 24,
        logThis: function () {
            console.log('in the sister object inside the Person constructor, "this" refers to: ', this)
        }

    }
}

// var john = new Person();
// console.log(john)
john.logThis();
john.sister.logThis();


