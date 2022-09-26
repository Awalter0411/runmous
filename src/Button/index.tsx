import React from 'react';
import classNames from 'classnames'

interface ButtonProps {
  children?: React.ReactNode
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  disabled?: Boolean,
  plain?: Boolean,
  round?: Boolean
}

const Button = (props: ButtonProps) => {
  const { children, type, disabled, plain, round } = props
  const prefix = 'el-button'
  const classes = classNames(
    prefix,
    {
      [`${prefix}--${type}`]: type,
      'is-disabled': disabled,
      'is-plain': plain,
      "is-round": round,
    }
  )
  return <button className={classes}>{children}</button>
}

export default Button
