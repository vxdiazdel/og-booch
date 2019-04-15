import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Wrapper from "../elements/wrapper"

const Recipes = ({ data }) => (
  <Layout>
    <SEO title="Kombucha recipes" />
    <Wrapper className="mt-5">
      <h1>Recipes</h1>
      <ul>
        {
          data.allMarkdownRemark.edges.map(recipe => {
            const { node } = recipe;
            return (
              <li key={node.id}>
                <Link to={node.frontmatter.path}>
                  {node.frontmatter.title}{' '}
                  {node.frontmatter.stars && <span> - {node.frontmatter.stars} stars</span>}
                </Link>
              </li>
            )
          })
        }
      </ul>
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
        }
      }
    }
  }
}
`