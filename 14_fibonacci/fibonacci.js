const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    let veryLast = 0
    let previous = 1;
    let current = 0;
    for (let i = 1; i < Number(num); i++) {
        current = previous + veryLast;
        veryLast = previous;
        previous = current;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
