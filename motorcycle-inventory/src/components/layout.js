/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from 'styled-components'
import { Orange } from '../theme/Orange'
import { Header } from "./Header"
import { GlobalStyle } from './GlobalStyle'

const Content = styled.div`
  text-align: center;
  margin-bottom: 5rem; // maybe margin top in footer
`
const StyledFooter = styled.footer`
  width: 100%;
  position:fixed;
`

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
    <ThemeProvider theme={Orange}>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Content>
        <main>{children}</main>
        <StyledFooter>
          © {new Date().getFullYear()}, Built by {data.site.siteMetadata.contact.Name} 
          {' '}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </StyledFooter>
      </Content>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout