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

const { animals, employees, prices, hours } = data;

const animalsByIds = (...ids) => animals.filter(animal => ids.find(id => id === animal.id));

const animalsOlderThan = (animal, age) => {
  const findAnimal = animals.find(element => element.name === animal);
  const searchAge = findAnimal.residents.every(element => element.age >= age);
  return searchAge;
};

const employeeByName = (employeeName) => {
  if (employeeName) {
    return employees.find(element => element.firstName === employeeName
      || element.lastName === employeeName);
  }
  return {};
};

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});

const isManager = id => employees.some(element => element.managers.find(a => a === id));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

const animalCount = species => animals.find(element => element.name === species).residents.length;

const entryCalculator = (entrants) => {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const visitantesArray = Object.entries(entrants);
  const valorAdult = visitantesArray[0][1] * 49.99;
  const valorChild = visitantesArray[1][1] * 20.99;
  const valorSenior = visitantesArray[2][1] * 24.99;
  const valorTotal = valorAdult + valorSenior + valorChild;
  return valorTotal;
};

const oldestFromFirstSpecies = (id) => {
  const funcionario = employees.find(fun => fun.id === id).responsibleFor[0];
  const animaL = animals.find(codigo => codigo.id === funcionario).residents;
  const animaisOrdem = animaL.sort((a, b) => {
    if (a.age < b.age) return 1;
    if (a.age > b.age) return -1;
    return 0;
  });
  return Object.values(animaisOrdem[0]);
};

const increasePrices = (percentage) => {
  const arrayPrices = Object.entries(prices);
  const newArrayPrices = arrayPrices.map(([key, val]) =>
    [key, Math.round(((val + ((val * percentage) / 100)) * 100)) / 100]);
  const obj = Object.fromEntries(newArrayPrices);
  return obj;
};

function schedule(dayName) {
  const objSchedule = {};
  if (dayName) {
    objSchedule[dayName] = `Open from ${hours[dayName].open}am until ${hours[dayName].close}pm`;

    if (dayName === 'Monday') {
      objSchedule[dayName] = 'CLOSED';
    }
    return objSchedule;
  }

  Object.keys(hours).map((element) => {
    objSchedule[element] = `Open from ${hours[element].open}am until ${hours[element].close}pm`;
    if (element === 'Monday') objSchedule[element] = 'CLOSED';
    return objSchedule;
  });
  return schedule;
}

function animalMap(options) {
  // seu código aqui
}
module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
