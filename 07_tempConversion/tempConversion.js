const ftoc = function (inFahrenheit) {
  const inCelsius = (inFahrenheit - 32) * 5 / 9
  return Math.round(inCelsius * 10) / 10
};

const ctof = function (inCelsius) {
  const inFahrenheit = inCelsius * 9 / 5 + 32
  return Math.round(inFahrenheit * 10) / 10

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

