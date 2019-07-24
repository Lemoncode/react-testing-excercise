import * as React from 'react';
import { CenteredLayout } from 'layout';
import { RecipesContainer } from 'pods/recipes';

export const RecipesScene: React.FunctionComponent = props => (
  <CenteredLayout>
    <RecipesContainer />
  </CenteredLayout>
);
