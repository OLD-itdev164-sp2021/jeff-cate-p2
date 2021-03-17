import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const Outer = styled.header`
  background: rgb(0,0,0);
  margin-bottom: 1.45rem;
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`
const H1 = styled.h1`
  margin: 0;
  text-align: center;
`

const StyledLink = styled(Link)`
  color: rgb(255,165,0);
  text-decoration: none;
  &:hover {
    color: rgb(255,255,255);
  }
`

const Header = ({ siteTitle }) => (
  <Outer>
    <Inner>
      <H1>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </H1>
    </Inner>
  </Outer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
