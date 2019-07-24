import * as React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export const CenteredLayout: React.FunctionComponent = props => {
  const classes = useStyles(props);
  return <div className={classes.container}>{props.children}</div>;
};
