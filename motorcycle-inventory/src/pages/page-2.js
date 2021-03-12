import { graphql, Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({data}) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Current inventory</h1>
    <ul>
    {
      data.allContentfulMotorcycle.edges.map(edge => (
        <li style={{listStyle:`none`}} key={edge.node.id}>
          <Link to={`/${edge.node.slug}`} key={edge.node.id} >
            <img src={edge.node.image.fluid.src} height='200px' alt='motorcycle pic' />
            <p>{edge.node.year} {edge.node.make} {edge.node.model}</p>
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
        id
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