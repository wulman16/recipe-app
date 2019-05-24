const chalk = require(`chalk`)
const yargs = require(`yargs`)
const recipes = require(`./recipe`)

// Customize yargs version
yargs.version(`1.1.0`)

// Create add command
yargs.command({
  command: `add`,
  describe: `Add a new recipe`,
  builder: {
    name: {
      describe: `Recipe name`,
      demandOption: true,
      type: `string`
    },
    ingredients: {
      describe: `Recipe ingredients`,
      demandOption: true,
      type: `string`
    },
    directions: {
      describe: `Recipe directions`,
      demandOption: true,
      type: `string`
    }
  },
  handler: (argv) => {
    recipes.addRecipe(argv.name, argv.ingredients, argv.directions)
  }
})

// Create remove command
yargs.command({
  command: `remove`,
  describe: `Remove a recipe`,
  builder: {
    name: {
      describe: `Recipe name`,
      demandOption: true,
      type: `string`
    }
  },
  handler: (argv) => {
    recipes.removeRecipe(argv.name)
  }
})

// Create list command
yargs.command({
  command: `list`,
  describe: `List all recipes`,
  handler() {
    recipes.listRecipes()
  }
})

// Create read command
yargs.command({
  command: `read`,
  describe: `Read a recipe`,
  handler: () => console.log(`Reading a recipe...`)
})

yargs.parse()