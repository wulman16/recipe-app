const validator = require(`validator`)
const getRecipe = require(`./recipe`)

console.log(getRecipe())

console.log(validator.isHexColor(`#00F000`))