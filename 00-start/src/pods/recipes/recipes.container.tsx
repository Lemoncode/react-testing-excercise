import * as React from 'react';
import { connect } from 'react-redux';
import { RecipesComponent } from './recipes.component';
import { Recipe } from './recipes.view-model';
import { State } from 'core/store/root-reducer';
import { getRecipesVMSelector } from './selectors';
import { Dispatch } from 'redux';
import { getRecipesRequest } from './store';
import { useRecipes } from './hooks';

interface InnerProps {
  recipes: Recipe[];
  loadRecipes: () => void;
}

const InnerRecipesContainer: React.FunctionComponent<InnerProps> = props => {
  const { recipes, loadRecipes } = props;
  const { filteredRecipes, handleFilter } = useRecipes(recipes);
  React.useEffect(() => {
    loadRecipes();
  }, []);

  return <RecipesComponent recipes={filteredRecipes} onSearch={handleFilter} />;
};

const mapStateToProps = (state: State) => ({
  recipes: getRecipesVMSelector(state),
});

const mapDispatchtoProps = (dispatch: Dispatch) => ({
  loadRecipes: () => dispatch(getRecipesRequest()),
});

export const RecipesContainer = connect(
  mapStateToProps,
  mapDispatchtoProps
)(InnerRecipesContainer);
