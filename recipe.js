const fs = require(`fs`)

const getRecipe = () => {
  return `Your recipe...`
}

const addRecipe = (name, ingredients, directions) => {
  const recipes = loadRecipes()

  // Check existing recipes for 
  if (recipes.filter(r => r.name === name).length > 0) {
    console.log(`${name} is already a recipe!`)
  } else {
    recipes.push({
      name: name,
      ingredients: ingredients,
      directions: directions
    })
    saveRecipes(recipes)
    console.log(`${name} added to recipes!`)
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
  getRecipe: getRecipe,
  addRecipe: addRecipe
}