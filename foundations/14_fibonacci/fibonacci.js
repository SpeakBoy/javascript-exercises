const fibonacci = function(x) {
    let numX = +x;
    if (numX < 0) return "OOPS";
    let numOne = 0;
    let numTwo = 1;
    if (numX === 0) return numOne;
    if (numX === 1) return numTwo;

    let numThree;
    let curr = 2;
    while (curr <= numX)
    {
        numThree = numOne + numTwo;
        numOne = numTwo;
        numTwo = numThree;
        curr++;
    }

    return numThree;
};

// Do not edit below this line
module.exports = fibonacci;
