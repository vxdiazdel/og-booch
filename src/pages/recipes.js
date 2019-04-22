import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import Wrapper from "../elements/wrapper"

const Recipes = ({ data }) => (
  <Layout>
    <SEO title="Kombucha recipes" />
    <Wrapper className="mt-5">
      <h1>Recipes</h1>
      <div>
        {
          data.allMarkdownRemark.edges.map(recipe => {
            const { node } = recipe;
            return <Card key={node.id} {...node} />;
          })
        }
      </div>
    </Wrapper>
  </Layout>
)

export default Recipes

export const recipesQuery = graphql`
query {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
          path
          stars
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`