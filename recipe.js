const fs = require(`fs`)
const chalk = require(`chalk`)

const getRecipe = () => {
  return `Your recipe...`
}

const addRecipe = (name, ingredients, directions) => {
  const recipes = loadRecipes()

  // Check whether the recipe name is already taken
  if (recipes.filter(r => r.name === name).length > 0) {
    console.log(chalk.red(`${name} is already a recipe!`))
  } else {
    recipes.push({
      name: name,
      ingredients: ingredients,
      directions: directions
    })
    saveRecipes(recipes)
    console.log(chalk.green(`${name} added to recipes!`))
  }
}

const removeRecipe = (name) => {
  const recipes = loadRecipes()
  const recipesToSave = recipes.filter(r => {
    return r.name.toLowerCase() !== name.toLowerCase()})
  if (recipes.length > recipesToSave.length) {
    saveRecipes(recipesToSave)
    console.log(chalk.green(`${name} removed from recipes!`))
  } else {
    console.log(chalk.red(`${name} not found in recipes!`))
  }
}

const listRecipes = () => {
  const recipes = loadRecipes()
  console.log(chalk.bold.italic.underline.yellow.bgCyan(`Your recipes`))
  recipes.forEach(r => console.log(chalk.magenta(r.name)))
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
  getRecipe: getRecipe,
  addRecipe: addRecipe,
  removeRecipe: removeRecipe,
  listRecipes: listRecipes
}