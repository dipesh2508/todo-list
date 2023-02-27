import React from 'react'
import PropTypes from 'prop-types'

export const Header = (props) => {
  return (
    <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
              <span class="navbar-brand mb-0 h1">{props.title}</span>
            </div>
          </nav>
  )
}

Header.defaultProps = {
    title : "Your Title Here"
}

Header.propTypes = {
    title : PropTypes.string
}


