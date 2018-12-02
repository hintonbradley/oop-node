
function Elevator () {

// PRIVATE VARIABLES //
    let currentFloor = 0;
    let doorsClosed = false;

    let findCurrentFloor = function () {
        console.log('currentFloor is, ', currentFloor);
        return currentFloor;
    }
    let areDoorsClosed = function () {
        console.log('Closing doors', doorsClosed);
        doorsClosed = true;
        return doorsClosed;
    }
    let closeDoors = function () {
        console.log('closing doors')
        doorsClosed = true;
    }
    let openDoors = function () {
        console.log('opening doors')
        doorsClosed = false;
    }
    let computeFloorDifference = function (num) {
        console.log('floor difference is: ', num-currentFloor);
        return num-currentFloor;
    }
    let moveElevator = function (n) {
        if (n<0) {
            console.log("Decending");
            return true;
        } else {
            console.log("Ascending");
            return true;
        }
    }

// PUBLIC VARIABLES //
    this.selectFloor = function (number) {
        if (number === currentFloor) {
            console.log("Enter a different floor");
            return false;
        }
        if(!doorsClosed) {
            closeDoors();
        }
        moveElevator(computeFloorDifference(number));
        openDoors();
        
        currentFloor = number;
        console.log(currentFloor);
    }
}

let ella = new Elevator();
console.log(ella);

