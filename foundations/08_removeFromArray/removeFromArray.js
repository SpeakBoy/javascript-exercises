const removeFromArray = function(arr) {
    const args = Array.prototype.slice.call(arguments, 1);

    newArr = [];

    for (item of arr)
    {
        if (!args.includes(item))
        {
            newArr.push(item);
        }
    }

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
