import React from "react";
import PropTypes from 'prop-types'

const Button = ({children, onClick}) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
}
Button.defaultTypes = {
  children: null,
  onClick: () => {}
}

/*
 * Basic button component to show capabilities of Storybook.
 * Usage of `markdown` is highly recommended for documentation.
 */
export default Button
