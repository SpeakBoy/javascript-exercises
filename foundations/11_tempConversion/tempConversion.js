const convertToCelsius = function(x) {
  return +((x - 32) * (5 / 9)).toFixed(1);
};

const convertToFahrenheit = function(x) {
  return +(x * (9 / 5) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
