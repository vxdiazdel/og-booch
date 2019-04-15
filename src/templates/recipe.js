import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import SEO from "../components/seo"

const Recipe = ({ data }) => {
  const { markdownRemark: recipe } = data;
  const { frontmatter: { title, stars } } = recipe;
  return(
    <>
      <SEO title={title} />
      <Header />
      <h1>{title}</h1>
      {stars && <h2>{stars} Stars</h2>}
      <div dangerouslySetInnerHTML={{__html: recipe.html}}></div>
    </>
  );
}

export default Recipe;

export const recipeQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        stars
      }
    }
  }
`;