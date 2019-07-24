import * as React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Button } from 'common/components';
import { history, linkRoutes } from 'core/router';
import { newId } from 'common/constants';

export const AddRecipe: React.FunctionComponent = props => {
  const handleNavigation = () => {
    history.push(linkRoutes.recipe(newId));
  };

  return <Button label={<AddIcon />} onClick={handleNavigation} />;
};
