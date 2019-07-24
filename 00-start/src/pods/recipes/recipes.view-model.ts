export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
}

export const createEmptyRecipe = (): Recipe => ({
  id: '',
  name: '',
  ingredients: [],
});
