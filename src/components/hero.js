import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const Hero = () => (
  <StaticQuery 
    query={graphql`
      query {
        hero: file(relativePath: { eq: "kombucha-hero.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      } 
    `}
    render={data => (
      <section className="hero">
        <Img fluid={data.hero.childImageSharp.fluid} imgStyle={{width: '100vw', height: '100vh'}} />
      </section>
    )} 
  />
)

export default Hero