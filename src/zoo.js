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

function animalsByIds(...ids) { // https://www.geeksforgeeks.org/javascript-rest-operator/
  return data.animals.filter(animal => ids.find(id => id === animal.id));
}

function animalsOlderThan(animal, age) {
  return data.animals.find(
    species => species.name === animal).residents.every(age1 => age1.age > age);
}

function employeeByName(employeeName) {
  return data.employees.find(
    name => name.firstName === employeeName || name.lastName === employeeName) || {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some(
    occupation => occupation.managers.find(manager => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // return
  // const reduceAnimals = (acc, species) => {
  //   if (species) return ` ${species.name} ${acc}`;
  //     return data.animals.every(
  //       animal => animal.find(animal => animal.name === species).residents.lenght);
  //
if (species) {
  return data.animals.find(animal => animal.name === species).residents.length;
}
const quantityOnly = {};
data.animals.forEach((animal) => { quantityOnly[animal.name] = animal.residents.length; });
return quantityOnly;
}

function entryCalculator(entering) {
  return entering && Object.keys(entering).length > 0
  ? Object.keys(entering).reduce((kind, quantity) => (kind + (data.prices[quantity] * entering[quantity])), 0) : 0
}

function animalMap(options) {
  const animalsByLocation = getLocations();
    
  };
  function getLocations() {
    return data.animals.map(
      ({ location }) => location)
      .reduce((acc, location) => {
        if (acc[location] === undefined) acc[location] = [];
        return acc;
      }, {});
}

// se existe options el em options existe includeNames
//
//adicionar em animalsByLocation: animais categorizados por localizaçõia
//retornar animalsByLocation

// função que recebe por parametro animalsByLocation el ao excutar adiciona
// para cada animal adicionar seu animal.name em uma location, animalsByLocation


  // seu código aqui

function schedule(day) {
  const schedule = {};
  if (day) {
    schedule[day] = readableCalendar(day);
    return schedule;
  }
  Object.keys(data.hours).forEach((el) => { schedule[el] = readableCalendar(el); });
  return schedule;
}

const readableCalendar = day => ((day === 'Monday')
  ? 'CLOSED'
  : `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`);

function oldestFromFirstSpecies(id) {
  return Object.values(data.animals
    .find(el => el.id === data.employees.find(animal => animal.id === id).responsibleFor[0]).residents
    .sort((first, second) => second.age - first.age)[0]);
}

function increasePrices(percentage) {
  Object.keys(data.prices).forEach((value) => {
    (data.prices[value] = Math.round(data.prices[value] * (1 + (percentage / 100)) * 100) / 100); // https://metring.com.br/arredondar-numero-em-javascript
  });
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
