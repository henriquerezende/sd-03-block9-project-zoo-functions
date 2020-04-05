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

function animalsByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) {
    return [];
  }
  const result = [];
  ids.forEach(idt => result.push(data.animals.find(element => element.id === idt)));
    // ids.forEach(idt => result.push(data.animals.find(({ element }) => element === idt)));
  return result;
}
function animalsOlderThan(animal, age) {
  // seu código aqui
  let maisVelhos = false;
  const especiesSelected = data.animals.filter(element => element.name === animal);
  const especiesSelected2 = especiesSelected[0].residents.filter(element => element.age >= age);
  if (especiesSelected2.length === 0) {
    maisVelhos = false;
  } else if (especiesSelected2.length === especiesSelected[0].residents.length) {
    maisVelhos = true;
  }

  return maisVelhos;
}

function employeeByName(employeeName) {
  // seu código aqui
  let employeeSelected = {};
  if (!employeeName) {
    return {};
  }
  employeeSelected = data.employees.filter(
  element => element.firstName === employeeName || element.lastName === employeeName);
  return employeeSelected[0];
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const isManagerFilter = data.employees[0].managers.filter(element => element === id);
  if (isManagerFilter.length === 0) {
    return false;
  } else if (isManagerFilter.length > 0) {
    return true;
  }
  return 0;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
  if (!managers && !responsibleFor) {
    const newObject = {
      id,
      firstName,
      lastName,
      managers: [],
      responsibleFor: [],
    };
    return data.employees.push(newObject);
  }

  const newObject = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newObject);

  return data.employees;
}

function animalCount(species) {
  // seu código aqui.
  if (!species) {
    const object2 = {};
    data.animals.forEach((element) => {
      object2[element.name] = element.residents.length;
    });
    return object2;
  }
  const especie = data.animals.find(element => element.name === species);
  return especie.residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants) {
    return 0;
  } else if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const total = (data.prices.Adult * entrants.Adult)
    + (data.prices.Senior * entrants.Senior) +
    (data.prices.Child * entrants.Child);
  return total;
}

function animalMap(options) {
  // seu código aqui
}

function from24to12HoursOpen(openHour, element) {
  element.open < 12 ? openHour = `${element.open}am` : openHour = `${element.open - 12}pm`;
  return openHour;
}

function from24to12HoursClose(closeHour, element) {
  element.close > 12 ? closeHour = `${element.close - 12}pm` : closeHour = `${element.close}am`;
  return closeHour;
}

function percoreObjeto(object, objaux) {
  const daysOfWeek = Object.keys(data.hours);
  let i = 0;
  let openHour;
  let closeHour;
  Object.values(object).forEach((element) => {
    if (element.open === 0 && element.close === 0) {
      objaux[daysOfWeek[i]] = 'CLOSED';
      i += i;
    }
    openHour = from24to12HoursOpen(openHour, element);
    closeHour = from24to12HoursClose(closeHour, element);
    if (daysOfWeek[i] === undefined) {
      return '';
    } 
      objaux[daysOfWeek[i]] = `Open from ${openHour} until ${closeHour}`;
      i += i;       
  return objaux;
  });
return objaux;
}

function schedule(dayName) {
  // seu código aqui
  const obj = {};
  percoreObjeto(data.hours, obj);
  if (!dayName) {
    return obj;
  } 
  const daySelected = Object.keys(obj).find(element => element === dayName);
  const obj2 = { [daySelected] : obj[daySelected]};
  return obj2;
  
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
