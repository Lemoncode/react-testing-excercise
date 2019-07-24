import { all, fork } from 'redux-saga/effects';
import { watchRecipesPodSagas } from 'pods/recipes';

export function* rootSaga() {
  yield all([fork(watchRecipesPodSagas)]);
}
