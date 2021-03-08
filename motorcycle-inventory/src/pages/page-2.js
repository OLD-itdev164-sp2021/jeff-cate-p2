import { graphql } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>This is where the magic happens!</h1>
  </Layout>
)

export default SecondPage

export const  query = graphql`
	allContentfulMotorcycle{
    edges{
      node{
        slug
        year
        make
        model
        price
      }
    }
  }
`