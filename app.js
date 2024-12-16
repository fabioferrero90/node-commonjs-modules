const getFullName = require('./modules/names.js')
const getHobbies = require('./modules/hobbies.js')
const getPeoples = require('./modules/people.js')

console.log("--- PRIMO MODULO ---");
console.log(getFullName("Fabio", "Ferrero"))

console.log("--- SECONDO MODULO ---");
console.log(getHobbies("Pallavolo", "Nuoto", "Tennis"))

console.log("--- TERZO MODULO ---");
console.log(getPeoples())