import { actionTypes } from './action-types';
import { Recipe } from '../api';
import { BaseAction } from 'common/types';

export interface RecipesPodState {
  recipes: Recipe[];
}

export const createDefaultState = (): RecipesPodState => ({
  recipes: [],
});

export const recipesPodReducer = (
  state = createDefaultState(),
  action: BaseAction
) => {
  switch (action.type) {
    case actionTypes.UPDATE_RECIPES:
      return handleUpdateRecipes(state, action.payload);
  }
  return state;
};

const handleUpdateRecipes = (
  state: RecipesPodState,
  recipes: Recipe[]
): RecipesPodState => ({
  ...state,
  recipes,
});
