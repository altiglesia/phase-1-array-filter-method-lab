const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];


// Array.prototype.filter()
function findMatching(driversArray, name) {
    return driversArray.filter(
        (matchingList) => matchingList.toLowerCase() === name.toLowerCase()
    );
};

function fuzzyMatch(driversArray, query) {
    return driversArray.filter(
        (firstInitials) =>
        firstInitials.toLowerCase().indexOf(query.toLowerCase()) === 0
    );
};

function matchName(driversArray, name) {
    return driversArray.filter(
        (driverOrigin) =>
        driverOrigin.name === name);
}

