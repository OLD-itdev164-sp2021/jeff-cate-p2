import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { navigate } from '@reach/router'

const MotorcyclePost = ({ data }) => {
    const { image, year, price, make, model, displacement, description} = data.contentfulMotorcycle;

    return (
        <Layout>
            <img src={image.fluid.src} style={{maxHeight:`530px`}}  alt="motorcycle"></img>
            <h2> {make} {model}</h2>
            
            <p style={{textAlign:`left`, minWidth: `340px`,maxWidth: `750px`,margin: `0 auto`}}>
                <span style={{display:`block`}}>Year: {year}</span>
                <span style={{display:`block`}}>Price: {price}</span>
                <span style={{display:`block`}}>displacement: {displacement} cc</span>
                <span style={{display:`block`}}>{description.description}</span>
                <span style={{display:`block`, marginTop:`1rem`, textAlign:`center`}}>
                    <button 
                        // to="/page-2/" 
                        style={{
                            background:`black`, 
                            color:`rgb(255,165,0)`,
                        }}
                        onClick={() => {
                            navigate('/page-2/');
                          }}
                    >
                        {`<--`} back to list
                    </button>
                </span>
            </p>

        </Layout>
    );
}

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