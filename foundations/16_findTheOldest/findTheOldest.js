const findTheOldest = function(people) {
    const thisYear = (new Date()).getFullYear();
    return people.reduce((oldest, curr) => {
        return ((curr.yearOfDeath ?? thisYear) - curr.yearOfBirth > (oldest.yearOfDeath ?? thisYear) - oldest.yearOfBirth) ? curr : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
