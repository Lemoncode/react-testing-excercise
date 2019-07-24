import * as React from 'react';

interface Props {
  id: string;
}

export const RecipeComponent: React.FunctionComponent<Props> = props => {
  const { id } = props;
  return <h1>Recipe with id: {id}</h1>;
};
