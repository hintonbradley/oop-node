let myCar = {
    make: "Porche",
    model: "911"
};

let descriptor = Object.getOwnPropertyDescriptor(myCar, 'make')
console.log(descriptor);

let objectBase = Object.getPrototypeOf(myCar);
let baseDescript = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(baseDescript);


let muppets = {
    frog: "Kermit",
    bear: "Fozzie",
    dog: "Ralph"
};

Object.defineProperty(muppets, "frog", {
    writable: false
})

muppets.frog = 'scooter';
console.log("muppets.frog is: ", muppets.frog)

Object.defineProperty(muppets, "bear", {
    enumerable: false
})

console.log(Object.keys(muppets));

Object.defineProperty(muppets, "dog", {
    configurable: false
})
delete muppets.dog;
console.log(muppets);