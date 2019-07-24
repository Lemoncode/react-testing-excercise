import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Recipe } from '../recipes.view-model';
import { useStyles } from './table.styles';
import { flatItems } from 'common/helpers';
import { history, linkRoutes } from 'core/router';

interface Props {
  recipes: Recipe[];
}

export const TableComponent: React.FunctionComponent<Props> = props => {
  const { recipes } = props;
  const classes = useStyles(props);

  const handleNavigation = (id: string) => () => {
    history.push(linkRoutes.recipe(id));
  };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Ingredients</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recipes.map(recipe => (
            <TableRow
              key={recipe.name}
              className={classes.row}
              onClick={handleNavigation(recipe.id)}
            >
              <TableCell component="th" scope="row">
                {recipe.name}
              </TableCell>
              <TableCell align="right">
                {flatItems(recipe.ingredients, ',')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
