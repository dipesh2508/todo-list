import React from 'react'
import PropTypes from 'prop-types'

export const Header = (props) => {
  return (
    <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <span className="navbar-brand mb-0 h1">{props.title}</span>
            </div>
          </nav>
  )
}

Header.defaultProps = {
    title : "My Todo list"
}

Header.propTypes = {
    title : PropTypes.string
}


