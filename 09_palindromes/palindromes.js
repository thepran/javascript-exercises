const palindromes = function (string) {
    let value = string.replace(/[^a-zA-Z]/g, "").toLowerCase()
    let rev = value.split("").reverse().join("")
    return value === rev
};

// Do not edit below this line
module.exports = palindromes;


let a = palindromes("racecar")
console.log(a)