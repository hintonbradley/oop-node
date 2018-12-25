
function TimeMachine (type) {
    // instance (own) members
    this.type = type;
    this.timeTravel = true;
    this.accomodatesTwoPeople = true;
}

// prototype members
TimeMachine.prototype.visitPast = function (date) {
    return 'Going back to ' + date;
}
TimeMachine.prototype.visitFuture = function (years) {
    return 'Visiting the future in ' + years + 'years';
}

// instances
let delorean = new TimeMachine('car');
let tardis = new TimeMachine('policeBox');

//Returns instance members:
console.log(Object.keys(delorean));

//Returns instance (own) and prototype members:
for (let key in tardis) {
    console.log(key);
}

//Example of 'own' or an instance property
console.log(delorean.hasOwnProperty('timeTravel'));
console.log(delorean.hasOwnProperty('visitFuture'));

