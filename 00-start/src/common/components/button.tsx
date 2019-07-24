import * as React from 'react';
import MaterialButton from '@material-ui/core/Button';

interface Props {
  label: string | React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const Button: React.FunctionComponent<Props> = props => {
  const { label, onClick, type } = props;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <MaterialButton
      onClick={handleClick}
      variant="contained"
      color="primary"
      type={type}
    >
      {label}
    </MaterialButton>
  );
};

Button.defaultProps = {
  type: 'submit',
};
