import React from 'react'

import { rhythm } from '../utils/typography'

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          <a
            href="https://github.com/gatsbyjs/gatsby-starter-blog"
            target="_blank"
            rel="noopener noreferrer"
          >Based on gatsby-starter-blog</a>
        </div>
        <a
          href="https://twitter.com/theoklitosBam7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a> &bull;{' '}
        <a
          href="https://github.com/theoklitosBam7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a> &bull;{' '}
        <a
          href="https://www.linkedin.com/in/theoklitosbam7"
          target="_blank"
          rel="noopener noreferrer">
          Linkedin
        </a>
      </footer>
    )
  }
}

export default Footer
