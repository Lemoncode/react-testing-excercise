import * as React from 'react';
import { Recipe } from './recipes.view-model';
import { TableComponent, SearchComponent, AddRecipe } from './components';
import { useStyles } from './recipes.component.styles';

interface Props {
  recipes: Recipe[];
  onSearch: (value: string) => void;
}

export const RecipesComponent: React.FunctionComponent<Props> = props => {
  const { recipes, onSearch } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.container}>
      <SearchComponent onSearch={onSearch} />
      <AddRecipe />
      <TableComponent recipes={recipes} />
    </div>
  );
};
