import { getRecipesSelector } from './store';
import { createSelector } from 'reselect';
import { mapToCollection } from 'common/mappers';
import { mapRecipeFromApiToVm } from './recipes.mappers';

export const getRecipesVMSelector = createSelector(
  getRecipesSelector,
  recipes => mapToCollection(recipes, mapRecipeFromApiToVm)
);
