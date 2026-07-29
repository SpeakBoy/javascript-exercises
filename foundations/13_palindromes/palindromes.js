const palindromes = function (str) {
    let left = 0;
    let right = str.length - 1;

    let strLowerCase = str.toLowerCase();

    while (left < right)
    {
        while (!isAlphaNumeric(strLowerCase[left]))
        {
            left++;
        }
        while (!isAlphaNumeric(strLowerCase[right]))
        {
            right--;
        }
        if (strLowerCase[left] !== strLowerCase[right])
            return false;
        left++;
        right--;
    }
    return true;
};

function isAlphaNumeric(ch)
{
    return /^[a-zA-Z0-9]+$/.test(ch);
}

// Do not edit below this line
module.exports = palindromes;
