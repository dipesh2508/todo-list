import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid"><div className='mx-3'>{props.title}</div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Header.defaultProps = {
  title: "My Todo list"
}

Header.propTypes = {
  title: PropTypes.string
}


