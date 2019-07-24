import * as React from 'react';
import { Recipe } from '../recipes.view-model';
import { filterRecipes } from '../recipes.business';

export const useRecipes = (recipes: Recipe[]) => {
  const [filteredRecipes, setFilteredRecipes] = React.useState<Recipe[]>([]);

  React.useEffect(() => {
    setFilteredRecipes(recipes);
  }, [recipes]);

  const handleFilter = value => {
    setFilteredRecipes(filterRecipes(recipes, value));
  };

  return { filteredRecipes, handleFilter };
};
