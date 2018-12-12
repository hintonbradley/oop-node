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

};

const kitt = new Car('Pontiac','Trans Am');
kitt.accelerate();
kitt.__proto__.__proto__.honk = function() {
    console.log('Beep beep!');
}

kitt.honk();
kitt.__proto__.__proto__.accelerate();

