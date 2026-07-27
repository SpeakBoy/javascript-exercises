const reverseString = function(str) {
    let reversedString = "";
    for (char of str)
    {
        reversedString = char + reversedString;
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
