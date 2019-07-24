import { actionTypes } from './action-types';
import { BaseAction } from 'common/types';
import { Recipe } from '../api';

export const getRecipesRequest = (): BaseAction => ({
  type: actionTypes.GET_RECIPES_REQUEST,
});

export const updateRecipes = (recipes: Recipe[]): BaseAction => ({
  type: actionTypes.UPDATE_RECIPES,
  payload: recipes,
});
