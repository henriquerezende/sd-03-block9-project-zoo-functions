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

const { employees, animals, prices, hours } = data;
const animalsByIds = (...ids) => {
  let animaisId = [];
  ids.forEach((id) => {
    animaisId = [...animaisId, ...animals.filter((animal) => {
      if (animal.id === id) return true;
      return false;
    })];
  });
  return animaisId;
};

const animalsOlderThan = (animal, age) => {
  const verifica = animals.filter(({ name }) => animal.includes(name));
  return verifica[0].residents[0].age > age;
};

const employeeByName = (employeeName) => {
  if (employeeName === undefined) return {};
  if (element.firstName === employeeName || element.lastName === employeeName) {
    const employee = employees.find((element) => {
    });
    return employee;
  }
};

const createEmployee = (personalInfo, associatedWith) => {
  return { ...personalInfo, ...associatedWith };
};

const isManager = (id) => {
  const gerente = employees[0].managers[0];
  if (gerente === id) {
    return true;
  }
  return false;
};

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  const newEmployee = ({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
  employees.push(newEmployee);
  return newEmployee;
};

const animalCount = (species) => {
  if (species) {
    return animals.find(nome => nome.name === species).residents.length;
  }
  return Object.assign(animals.reduce((nome, quantidade) => {
    nome[quantidade.name] = quantidade.residents.length;
    return nome;
  }, {}));
};

const entryCalculator = (entrants) => {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const valores = Object.values(entrants);
  const adulto = prices.Adult * valores[0];
  const child = prices.Child * valores[1];
  const senior = prices.Senior * valores[2];
  return (adulto + senior + child);
};

const animalMap = (options) => {
};

const schedule = (dayName) => {
  const object = {};
  if (!dayName) {
    Object.keys(hours).map((element) => {
      object[element] = `Open from ${hours[element].open}am until ${hours[element].close - 12}pm`;

      if (element === 'Monday') {
        object[element] = 'CLOSED';
      }
      return object;
    });
  }

  if (dayName) {
    object[dayName] = `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`;

    if (dayName === 'Monday') {
      object[dayName] = 'CLOSED';
    }
  }
  return object;
};


const oldestFromFirstSpecies = (id) => {
  const funcionario = employees.find(fun => fun.id === id).responsibleFor[0];
  const animal = animals.find(codigo => codigo.id === funcionario).residents;
  const animalOrder = animal.sort((a, b) => {
    if (a.age < b.age) return 1;
    if (a.age > b.age) return -1;
    return 0;
  });
  return Object.values(animalOrder[0]);
};

const increasePrices = (percentage) => {
  Object.keys(prices).reduce((objeto, pessoa) => {
    objeto[pessoa] = Math.round((objeto[pessoa] * (100 + percentage)).toFixed(2)) / 100;
    return objeto;
  }, prices);
};

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
