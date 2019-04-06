import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

class About extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const siteKeywords = data.site.siteMetadata.keywords

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[
            { name: 'description', content: siteDescription },
            { name: 'keywords', content: siteKeywords }
          ]}
          title={siteTitle}
        />
        <h1>Within a few words</h1>
        <hr />
        <p>Ι’m currently working as a COBOL Developer with IBM iSeries (AS/400) computer system in FS Industry (more specific in Insurance).</p>
        <p><strong>Main duties involved:</strong></p>
        <ul>
          <li>Application development and implementation</li>
          <li>Technical documentation for project’s application and AS/400.</li>
          <li>Testing and debugging software.</li>
          <li>Production troubleshooting and support.</li>
        </ul>
        <p>Before this path, I had studied Python (which was my first touch with programming) and Web Development mostly focused on JS technologies such as: React.js, Vue.js, Express.js.</p>
        <p>Recently, I decided to delve deeper into databases and back-end technologies.</p>
        <p>Last but not least, I’m a Linux lover.</p>
        <Footer />
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
