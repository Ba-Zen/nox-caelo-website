import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
//import { Head } from "../components/"
import { Header } from "../components/header"
import styled from "styled-components"
import { GlobalStyle } from "../styles/GlobalStyle"
import Platforms from "../components/platform"
import Colors from "../components/colors"
import Footer from "../components/footer"

const Site = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`

export const Layout = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={({ site }) => (
      <Site>
        {/* <Head metadata={site.siteMetadata} /> */}

        <GlobalStyle />

        <Header
          title={site.siteMetadata.title}
          description={site.siteMetadata.description}
        />
        <Platforms />
        <Colors />
        <Footer />
      </Site>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
