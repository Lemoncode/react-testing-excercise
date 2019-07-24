import * as React from 'react';
import { TextField } from 'common/components';
import { useStyles } from './search.component.styles';

interface Props {
  onSearch: (value: string) => void;
}

export const SearchComponent: React.FunctionComponent<Props> = props => {
  const { onSearch } = props;
  const classes = useStyles(props);

  const [value, setValue] = React.useState('');

  const handleChange = (_, newValue) => {
    setValue(newValue);
    onSearch(newValue);
  };

  return (
    <TextField
      className={classes.textField}
      label="Search"
      name="search"
      value={value}
      onChange={handleChange}
    />
  );
};
