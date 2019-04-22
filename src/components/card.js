import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Card = (data) => {
  return (
    <div>
      <Link to={data.frontmatter.path}>
        {data.frontmatter.title}{' '}
        {data.frontmatter.stars && <span> - {data.frontmatter.stars} stars</span>}
        <Img fluid={data.frontmatter.image.childImageSharp.fluid} />
      </Link>
    </div>
  )
}

export default Card