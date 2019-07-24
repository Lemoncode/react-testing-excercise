import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { RecipeComponent } from './recipe.component';

interface Params {
  id: string;
}

const InnerRecipeContainer: React.FunctionComponent<RouteComponentProps<Params>> = props => {
  const { id } = props.match.params;

  return(
    <RecipeComponent id={id} />
  )
}

export const RecipeContainer = withRouter(InnerRecipeContainer);
