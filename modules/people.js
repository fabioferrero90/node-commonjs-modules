const getFullName = require('./names.js')
const getHobbies = require('./hobbies.js')

function getPeoples() {
  return { fullName: getFullName("Giovanni", "Rossi"), hobbies: getHobbies("Motociclismo", "Parkour", "Atletica") }
}

module.exports = getPeoples;