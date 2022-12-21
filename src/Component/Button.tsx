import React, { MouseEventHandler } from 'react';
import { cn } from 'utils';

import Icon from './Icon';
import { IconType } from './Icon/types';
import { usePlaceholderClasses } from './Placeholder/hooks';
import { PlaceholderSizeType } from './Placeholder/types';

type ButtonThemeType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'dark'
  | 'light'
  | 'outline-primary'
  | 'outline-secondary'
  | 'outline-success'
  | 'outline-danger'
  | 'outline-warning'
  | 'outline-info'
  | 'outline-dark'
  | 'outline-light'
  | 'transparent';

interface ButtonInterface {
  children?: string;
  className?: string;
  color?: ButtonThemeType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  lg?: boolean;
  sm?: boolean;
  disabled?: boolean;
  loading?: boolean;
  placeholderSize?: PlaceholderSizeType;
  icon?: IconType;
}

const Button = ({
  children,
  className,
  color,
  disabled,
  lg,
  onClick,
  sm,
  type,
  loading,
  placeholderSize,
  icon,
}: ButtonInterface): JSX.Element => {
  const placeholder = usePlaceholderClasses(placeholderSize);

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={cn(`btn btn-${color}`, className, {
        'btn-sm': sm,
        'btn-lg': lg,
        disabled: loading,
        [`${placeholder}`]: loading,
      })}
    >
      {icon && !loading ? <Icon name={icon} me={children ? 2 : 0} /> : null}
      {!loading ? children : ''}
    </button>
  );
};

Button.defaultProps = {
  color: 'primary',
  disabled: false,
  lg: false,
  sm: false,
  type: 'button',
  loading: false,
  placeholderSize: 4,
};

export default Button;
