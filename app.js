const chalk = require(`chalk`)
const getRecipe = require(`./recipe`)

console.log(chalk.bold.italic.underline.yellow.bgCyanBright(getRecipe()))