import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, onClick, type }) => {
  // ESLint only allows types to be hardcoded. Can't just 'type={type}' even if you have nice proptypes.
  if (type === 'button') {
    return (
      <button type="button" onClick={onClick}>
        {children}
      </button>
    )
  }
  return (
    <button type="submit" onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'submit'])
}

Button.defaultProps = {
  children: null,
  type: 'button'
}

/*
 * Basic button component to show capabilities of Storybook.
 * Usage of `markdown` is highly recommended for documentation.
 */
export default Button
