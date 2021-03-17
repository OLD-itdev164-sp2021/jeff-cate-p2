import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { navigate } from '@reach/router'

const MotorcyclePost = ({ data }) => {
    const { image, year, price, make, model, displacement, description } = data.contentfulMotorcycle;
    return (
        <Layout>
            <img src={image.fluid.src} style={{maxHeight:`500px`}}  alt="motorcycle"></img>
            <h2> {make} {model}</h2>
            
            <p style={{ textAlign:`left`, minWidth: `340px`,maxWidth: `750px`,margin: `0 auto`}}>
                <span style={{display:`block`}}>Year: {year}</span>
                <span style={{display:`block`}}>Price: ${price}</span>
                <span style={{display:`block`}}>Displacement: {displacement} cc</span>
                <span style={{display:`block`}}>Description: </span>
            </p>
            <div dangerouslySetInnerHTML={{__html: description.childrenMarkdownRemark.html}}></div>
            <button 
                style={{
                    background:`black`, 
                    color:`rgb(255,165,0)`,
                    marginTop:`1rem`
                }}
                onClick={() => {
                    navigate('/page-2/');
                    }}
            >
                {`<--`} back to list
            </button>

        </Layout>
    );
}

export default MotorcyclePost;

export const pageQuery = graphql`
query motorcycleQuery($slug: String!) {
    contentfulMotorcycle(slug: {eq: $slug}) {
      year
      make
      model
      price
      displacement
      image {
        fluid {
          src
        }
      }
      description {
        childrenMarkdownRemark {
          html
        }
      }
    }
  }
`