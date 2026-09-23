const permutations = function(arr) {
    if (arr.length <= 1) {
        return [arr];
    }

    const currentLevelPerms = [];
    for (let i = 0; i < arr.length; i++) {
        const arrWithoutI = arr.toSpliced(i, 1);
        const subLevelPerms = permutations(arrWithoutI);
        for (const perm of subLevelPerms) {
            currentLevelPerms.push([arr[i], ...perm]);
        }   
    }

    return currentLevelPerms;
};
  
// Do not edit below this line
module.exports = permutations;
