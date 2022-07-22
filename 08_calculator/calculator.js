const add = function (num1, num2) {
  return num1 + num2
};

const subtract = function (num1, num2) {
  return num1 - num2
};

const sum = function (arr) {
  let result = 0
  arr.forEach(value => result += value)
  return result
};

const multiply = function (args) {
  let result = 1
  args.forEach(value => result *= value)
  return result
};

const power = function (value, power) {
  return value ** power
};

const factorial = function (num) {
  if (num === 0)
    return 1
  else
    return num * factorial(num - 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};


