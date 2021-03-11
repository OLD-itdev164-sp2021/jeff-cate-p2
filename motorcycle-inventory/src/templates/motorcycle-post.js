import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout'

const MotorcyclePost = ({ data }) => {
    const { image, year, make, model, displacement, description } = data.contentfulMotorcycle;
}

return (
    <Layout>
        <h1> `${year}`</h1>
    </Layout>
)
console.log(image.src);

export default MotorcyclePost;

export const pageQuery = graphql`
    query motorcycleQuery($slug: String!) {
        contentfulMotorcycle(slug: {eq: $slug}) {
            image{
                fluid {
                    src
                }
            }
            year
            make
            price
            model
            displacement
            description {
                description
            }
        }
  }
`