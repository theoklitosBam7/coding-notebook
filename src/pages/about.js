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
        <p>Software Developer with working experience in Insurance and Banking Projects. I develop new features for the business's core system and their web applications, maintaining at the same time the existing ones.</p>
        <p>I'm a continuous learner of design patterns and architectures with cutting-edge technologies.</p>
        <p><strong>Main technologies and duties involved on project:</strong></p>
        <ul>
          <li>IBM iSeries, COBOL, CL, DB2.</li>
          <li>Angular, Node.js.</li>
          <li>Middleware SOAP Web Services.</li>
          <li>JBoss EAP, Apache Camel, WSDL, Spring.</li>
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
