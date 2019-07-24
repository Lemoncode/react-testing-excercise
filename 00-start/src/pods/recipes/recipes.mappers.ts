import * as apiModel from './api/recipes.api-model';
import * as vm from './recipes.view-model';

export const mapRecipeFromApiToVm = (recipe: apiModel.Recipe): vm.Recipe =>
  Boolean(recipe)
    ? {
        ...recipe,
      }
    : vm.createEmptyRecipe();
