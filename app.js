const chalk = require(`chalk`)
const yargs = require(`yargs`)
const getRecipe = require(`./recipe`)

// Customize yargs version
yargs.version(`1.1.0`)

// Create add command
yargs.command({
  command: `add`,
  describe: `Add a new recipe`,
  handler: () => console.log(`Adding a new note...`)
})

// Create remove command
yargs.command({
  command: `remove`,
  describe: `Remove a recipe`,
  handler: () => console.log(`Removing a recipe...`)
})

// Create list command
yargs.command({
  command: `list`,
  describe: `List all recipes`,
  handler: () => console.log(`Listing all recipes...`)
})

// Create read command
yargs.command({
  command: `read`,
  describe: `Read a recipe`,
  handler: () => console.log(`Reading a recipe...`)
})

// add, remove, read, list

yargs.argv