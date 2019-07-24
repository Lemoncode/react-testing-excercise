import { Recipe } from './recipes.view-model';

export const filterRecipes = (recipes: Recipe[], searchedValue: string) => {
  const ingredients = getSearchedIngredients(searchedValue);

  return searchedValue === ''
    ? recipes
    : filterRecipesByIngredients(recipes, ingredients);
};

const getSearchedIngredients = (searchedValue: string) => {
  return searchedValue.split(',');
};

const filterRecipesByIngredients = (
  recipes: Recipe[],
  ingredients: string[]
) => {
  return recipes.filter((recipe: Recipe) =>
    matchAllIngredients(recipe.ingredients, ingredients)
  );
};

const matchAllIngredients = (ingredients, searchedIngredients) => {
  return searchedIngredients.every(searchedIngredient =>
    matchSomeIngredient(searchedIngredient, ingredients)
  );
};

const matchSomeIngredient = (
  searchedIngredient: string,
  ingredients: string[]
) => {
  return ingredients.some(ingredient =>
    matchIngredient(ingredient, searchedIngredient)
  );
};

const matchIngredient = (ingredient, searchedIngredient) => {
  const searchedIngredientLowerCase = searchedIngredient.toLowerCase().trim();
  const ingredientLowerCase = ingredient.toLowerCase().trim();

  return ingredientLowerCase.indexOf(searchedIngredientLowerCase) >= 0;
};
