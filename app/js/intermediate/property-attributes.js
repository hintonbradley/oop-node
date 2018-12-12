let myCar = {
    make: "Porche",
    model: "911"
};

let descriptor = Object.getOwnPropertyDescriptor(myCar, 'make')
console.log(descriptor);

let objectBase = Object.getPrototypeOf(myCar);
let baseDescript = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(baseDescript)