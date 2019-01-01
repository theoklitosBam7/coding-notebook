import React from 'react'
import { Link } from 'gatsby'

import "./NavBar.css"

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <ul className="container">
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
        </ul>
      </div>
    )
  }
}

export default NavBar
