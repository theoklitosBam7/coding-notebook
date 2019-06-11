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
        <p>Application Developer currently working with IBM iSeries (AS/400) computer system in FS Industry (more specific in Insurance) writing and maintaining complex applications written mostly in COBOL</p>
        <p>I have a very good knowledge of SQL RDBMSs (MariaDB, Postgresql, DB2) and I'm familiar with NoSQL databases like MongoDB.</p>
        <p>Regarding the Web Development arena I'm mostly focused on technologies such as React.js, Vue.js, Angular on front-end and Spring Boot, Express.js on back-end.</p>
        <p><strong>Main duties involved on project:</strong></p>
        <ul>
          <li>Application development and implementation.</li>
          <li>Technical documentation.</li>
          <li>Testing and debugging software.</li>
          <li>Production troubleshooting and support.</li>
        </ul>
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
