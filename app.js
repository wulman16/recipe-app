const chalk = require(`chalk`)
const getRecipe = require(`./recipe`)

console.log(chalk.cyanBright.bold.bgWhiteBright(getRecipe()))