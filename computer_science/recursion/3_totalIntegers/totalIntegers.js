const totalIntegers = function(obj) {
    if (typeof obj !== "object" || obj === null) {
        return;
    }

    const values = Object.values(obj);

    return values.reduce((acc, curr) =>
        Number.isInteger(curr) ? acc + 1 : acc + (totalIntegers(curr) ?? 0), 0);
};
  
// Do not edit below this line
module.exports = totalIntegers;
