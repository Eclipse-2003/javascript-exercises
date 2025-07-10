const removeFromArray = function(arr, ...args) { 
    let value = 0   
    for (let i = 0; i < args.length; i++){
        while (true) {
            value = arr.findIndex(element => element === args[i])
            if (value == -1) break;
            arr.splice(value, 1);
        } 
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
