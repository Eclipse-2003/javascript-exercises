const fibonacci = function(num) {
    let veryLast = 0
    let previous = 1;
    let current = 1;
    for (let i = 1; i < num; i++) {
        current = previous + veryLast;
        veryLast = previous;
        previous = current;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
