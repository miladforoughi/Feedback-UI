import { type } from '@testing-library/user-event/dist/type'
import { isDisabled } from '@testing-library/user-event/dist/utils'
import PropTypes from 'prop-types'
import React from 'react'

function Button({
  children,
  version = 'primary',
  type = 'button',
  isDisable = false,
}) {
  return (
    <button type={type} disabled={isDisable} className={`btn-${version}`}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
}

export default Button
