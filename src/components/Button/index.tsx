import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
  /**
   * @description children
   */
  children?: React.ReactNode;
  /**
   * @description type
   * @default 'primary'
   */
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  /**
   * @description disabled
   * @default false
   */
  disabled?: Boolean;
  /**
   * @description plain
   * @default false
   */
  plain?: Boolean;
  /**
   * @description round
   * @default false
   */
  round?: Boolean;
}

const Button = (props: ButtonProps) => {
  const { children, type = 'primary', disabled, plain, round } = props;
  const prefix = 'el-button';
  const classes = classNames(prefix, {
    [`${prefix}--${type}`]: type,
    'is-disabled': disabled,
    'is-plain': plain,
    'is-round': round,
  });
  return <button className={classes}>{children}</button>;
};

export default Button;
