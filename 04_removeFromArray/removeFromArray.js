const removeFromArray = function (arr, ...valuesToRemove) {
    return arr.filter(values => !valuesToRemove.includes(values))
};

// Do not edit below this line
module.exports = removeFromArray;
