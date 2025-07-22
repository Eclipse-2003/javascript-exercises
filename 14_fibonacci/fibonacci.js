const fibonacci = function(num) {
    let number = Number(num);
    if (number < 0) { return "OOPS"; }
    if (number == 0) { return 0; }
    
    let veryLast = 0
    let previous = 1;
    let current = 1;
    for (let i = 1; i < number; i++) {
        current = previous + veryLast;
        veryLast = previous;
        previous = current;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
