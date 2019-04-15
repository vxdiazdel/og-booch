import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`kombucha`, `how to make kombucha`, `home made kombucha`]} />
    <Hero img="kombucha-hero.jpg" />
  </Layout>
)

export default IndexPage
