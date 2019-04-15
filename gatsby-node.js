const path = require('path');
const { graphql } = require('gatsby');

exports.createPages = ({actions, graphql}) => {
  const { createPage } = actions;
  const recipeTemplate = path.resolve('src/templates/recipe.js');

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }`)
  .then(res => {
    if(res.errors) {
      return Promise.reject(res.errors);
    }
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: recipeTemplate
      });
    });
  })
};