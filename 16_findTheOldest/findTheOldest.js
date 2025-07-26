const findTheOldest = function(array) {
    const date = new Date();
    let highestAge = 0;
    let person = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].yearOfDeath === undefined) {
            array[i].yearOfDeath = date.getFullYear();
        }
        let age = array[i].yearOfDeath - array[i].yearOfBirth;
        if (age > highestAge) {
            highestAge = age;
            person = i;
        }
    }
    return array[person];
};

// Do not edit below this line
module.exports = findTheOldest;
