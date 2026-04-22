//Speed Limit = 70
//If speed is 70 or less, print "Ok"
//If speed is between 70 and 80, print "You are speeding"
//If speed is 80 or more, print "You are going too fast"
//Bonus: For every 5km above the speed limit (70), add 1 demerit point. If the driver gets more than 12 points, print "License suspended"

Math.floor(1.3) // rounds down to the nearest integer

checkSpeed(130); // Ok

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log("Ok");
        return;
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
        console.log("License suspended");
    else
        console.log('Points: ', points);
}