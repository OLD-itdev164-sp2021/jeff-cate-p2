import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { List, ListItem } from "../components/List"

const SecondPage = ({data}) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Current inventory</h1>
    <List width={[1, 1/2, 2/3]} p={2}>
    {
      data.allContentfulMotorcycle.edges.map(edge => (
        <ListItem style={{listStyle:`none`}} key={edge.node.id}>
          <Link to={`/${edge.node.slug}`} key={edge.node.id} >
            <img src={edge.node.image.fluid.src} height='200px' alt='motorcycle pic' />
            <p>{edge.node.year} {edge.node.make} {edge.node.model}</p>
          </Link> 
        </ListItem>
      ))
    }
    </List>
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
          fluid(maxWidth: 600) {
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