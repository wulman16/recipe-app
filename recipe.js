const fs = require(`fs`)
const chalk = require(`chalk`)

const addRecipe = (name, ingredients, directions) => {
  const recipes = loadRecipes()

  // Check whether the recipe name is already taken
  if (recipes.find(r => r.name === name)) {
    console.log()
    console.log(chalk.red(`${name} is already a recipe!`))
    console.log()
  } else {
    recipes.push({
      name: name,
      ingredients: ingredients,
      directions: directions
    })
    saveRecipes(recipes)
    console.log()
    console.log(chalk.green(`${name} added to recipes!`))
    console.log()
  }
}

const removeRecipe = (name) => {
  const recipes = loadRecipes()
  const recipesToSave = recipes.filter(r => {
    return r.name.toLowerCase() !== name.toLowerCase()})
  if (recipes.length > recipesToSave.length) {
    saveRecipes(recipesToSave)
    console.log()
    console.log(chalk.green(`${name} removed from recipes!`))
    console.log()
  } else {
    console.log()
    console.log(chalk.red(`${name} not found in recipes!`))
    console.log()
  }
}

const listRecipes = () => {
  const recipes = loadRecipes()
  console.log(chalk.bold.italic.underline.yellow.bgCyan(`Your recipes`))
  recipes.forEach(r => console.log(chalk.yellow(r.name)))
}

const readRecipe = (name) => {
  const recipes = loadRecipes()
  const recipe = recipes.find(r => r.name.toLowerCase() === name.toLowerCase())

  if (recipe) {
    console.log()
    console.log(chalk.bold.italic.underline.yellow.bgCyan(recipe.name))
    console.log(chalk.cyan(recipe.ingredients))
    console.log(chalk.yellow(recipe.directions))
    console.log()
  } else {
    console.log()
    console.log(chalk.red(`${name} not found in recipes!`))
    console.log()
  }
}

const saveRecipes = (recipes) => {
  const dataJSON = JSON.stringify(recipes)
  fs.writeFileSync(`recipes.json`, dataJSON)
}

const loadRecipes = () => {
  try {
    const dataBuffer = fs.readFileSync(`recipes.json`)
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

module.exports = {
  addRecipe: addRecipe,
  removeRecipe: removeRecipe,
  listRecipes: listRecipes,
  readRecipe: readRecipe
}