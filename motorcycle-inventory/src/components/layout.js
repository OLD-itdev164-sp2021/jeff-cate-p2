/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          contact {
            Name
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          padding: `0 1.0875rem 1.45rem`,
          textAlign: `center`
        }}
      >
      <main>{children}</main>
      </div>
        <footer
          style={{
            width: `100%`,
            marginTop: `2rem`,
            position:`absolute`,
          }}
        >
          © {new Date().getFullYear()}, Built by {`${data.site.siteMetadata.contact.Name} with `}
          
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
