const pascal = function(n) {
    if (n === 1) {
        return [1];
    }

    const prevRow = [0, ...pascal(n-1), 0];
    const currRow = [];
    for (let i = 0; i < prevRow.length - 1; i++) {
        currRow.push(prevRow[i] + prevRow[i + 1]);
    }

    return currRow;
};
  
// Do not edit below this line
module.exports = pascal;
