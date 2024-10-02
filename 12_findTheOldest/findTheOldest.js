const findTheOldest = function(people) {
  const sortedPeople = people.sort(function(a , b) {
    const currentYear = new Date().getFullYear();
    const aYearFinal = a.yearOfDeath == undefined ? currentYear : a.yearOfDeath;
    const bYearFinal = b.yearOfDeath == undefined ? currentYear : b.yearOfDeath;
  
    const thisPerson = aYearFinal- a.yearOfBirth;
    const nextPerson = bYearFinal - b.yearOfBirth;
    return thisPerson > nextPerson ? -1 : 1;
  });
  return sortedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
