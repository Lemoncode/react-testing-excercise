import { Recipe } from './recipes.api-model';
import { mockRecipes } from './recipes.mock-data';

export const getRecipes = (): Promise<Recipe[]> => Promise.resolve(mockRecipes);
