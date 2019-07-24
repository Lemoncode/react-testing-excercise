import { takeLatest, call, put } from 'redux-saga/effects';
import { actionTypes } from './action-types';
import { getRecipes } from '../api';
import { updateRecipes } from './actions';

export const watchRecipesPodSagas = function*() {
  yield takeLatest(actionTypes.GET_RECIPES_REQUEST, getRecipesRequestSaga);
};

function* getRecipesRequestSaga() {
  const recipes = yield call(getRecipes);
  yield put(updateRecipes(recipes));
}
