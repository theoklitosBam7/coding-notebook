import React from 'react'
import { Link } from 'gatsby'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'
import './Bio.css'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Theoklitos Bampouris`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
          className="imgStyle"
        />
        <p>
          Personal blog by <Link to={'/about'}>Theoklitos Bampouris</Link> who lives in Athens (Greece), working as an Application Developer.
          {' '}
          <a href="https://twitter.com/theoklitosBam7">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
