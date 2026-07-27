const sumAll = function(a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b))
    {
        return "ERROR";
    }

    if (b < a)
    {
        lower = b;
        upper = a;
    }
    else
    {
        lower = a;
        upper = b;
    }

    let sum = 0;
    for (let i = lower; i <= upper; i++)
    {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
