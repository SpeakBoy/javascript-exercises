const contains = function(obj, val) {
    if (Object.is(obj, val)) {
        return true;
    }
    if (obj !== Object(obj)) {
        return false;
    }

    let currentLevelContains = false;
    for (const objVal of Object.values(obj)) {
        currentLevelContains ||= contains(objVal, val);
    }

    return currentLevelContains;
};
  
// Do not edit below this line
module.exports = contains;
