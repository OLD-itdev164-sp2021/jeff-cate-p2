import { graphql, Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({data}) => (
  <Layout>
    <SEO title="Page two" />
    <h1>This is where the magic happens!</h1>
    <ul>
    {
      data.allContentfulMotorcycle.edges.map(edge => (
        <li style={{listStyle:`none`}}>
          <Link to={edge.node.slug} key={edge.node.id}>
            <img src={edge.node.image.fluid.src} alt='motorcycle pic' />
          </Link> 
        </li>
      ))
    }
    </ul>
  </Layout>
)

export default SecondPage

export const  query = graphql`
query{
	allContentfulMotorcycle{
    edges{
      node{
        slug
        year
    		image {
    		  id
          fluid {
            src
          }
    		}
        make
        model
        price
      }
    }
  }
}
`