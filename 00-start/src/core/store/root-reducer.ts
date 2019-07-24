import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { RecipesPodState, recipesPodReducer } from 'pods/recipes';

export interface State {
  router: any;
  recipesPod: RecipesPodState;
}

export const createRootReducer = history =>
  combineReducers<State>({
    router: connectRouter(history),
    recipesPod: recipesPodReducer,
  });
