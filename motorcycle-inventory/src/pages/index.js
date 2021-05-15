import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
const link = `https://images.unsplash.com/photo-1614771161417-b38ba952bcbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to my new Gatsby site.</p>
    <p><small><i>(click the image to get started.)</i></small></p>
    <Link to="/page-2/" >
      <StaticImage
        src={link}
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF","jpg"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
        />
    </Link>
  </Layout>
)

export default IndexPage
