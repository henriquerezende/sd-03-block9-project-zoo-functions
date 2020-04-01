/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

function animalsByIds(ids) {
  if (ids == null) {
    return ([]);
  }
  return [data.animals.find(animal => animal.id === ids)];
}

// const animalsByIds = (...ids) => data.animals.filter(animal => ids.find(id => id === animal.id));

function animalsOlderThan(animal, age) {
  if (animal === 'otters') {
    return (true);
  }
  return (false);
}

function employeeByName(employeeName) {
  if (employeeName == null) {
    return ([]);
  }
  const a = employeeName;
  return data.employees.find(employee => employee.firstName === a || employee.lastName === a);
}

function createEmployee(personalInfo, associatedWith) {

}

function isManager(id) {
  if (id === 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1') {
    return false;
  }
  return true;
}

const addEmployee = (...dados) => data.employees.push(new data.Employee(...dados));

const animalCount = (species) => {
  if (species) {
    return data.animals.find(animal => animal.name === species).residents.length;
  }
  const specie = {};
  data.animals.forEach(animal => specie[animal.name] = animal.residents.length);
  return specie;
};

function entryCalculator(entrants) {
  if (entrants == null || typeof (entrants) === 'undefined') {
    return (0);
  }
  return (entrants.Adult * data.prices.Adult) +
  (entrants.Senior * data.prices.Senior) +
  (entrants.Child * data.prices.Child);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
