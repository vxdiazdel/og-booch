import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`kombucha`, `how to make kombucha`, `home made kombucha`]} />
    <Hero />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
