const leapYears = function(year) {
    //check if year is not divisible by 100 or if it is divisible by 400 and 4
    if ((!(year % 100 === 0) || year % 400 === 0) && year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
