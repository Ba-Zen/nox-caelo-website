import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { theme, media } from "@styles"
import Demo from "../images/demo.png"

const { colors } = theme

const HeaderContainer = styled.header`
  padding: 75px 25px;
  text-align: center;
  max-width: 1400px ${media.tablet`padding: 70px 10px;`};
`
const Title = styled.h1`
  font-size: 70px;
  font-weight: 500;
  background: -webkit-linear-gradient(${colors.yellow}, ${colors.accent});
  background: linear-gradient(${colors.yellow}, ${colors.accent});
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  ${media.tablet`font-size: 50px;`};
`
const Subtitle = styled.h2`
  color: ${colors.accent};
  font-size: 18px;
  line-height: 2;
  font-weight: 900;
  ${media.tablet`
    font-size: 16px;
  `};
`
const Subtitle2 = styled.h2`
  color: ${colors.accent};
  font-size: 18px;
  line-height: 2;
  font-weight: 900;
  margin-bottom: 100px;
  a {
    border-bottom: 1px solid ${colors.accent};
  }
  ${media.tablet`
    font-size: 16px;
  `};
`
const Screenshot = styled.img`
  max-width: 1400px;
`

export const Header = ({ title, description }) => (
  <HeaderContainer>
    <Title>{title}</Title>
    <Subtitle>{description}</Subtitle>
    <Subtitle2>
      This theme is based on the{" "}
      <a
        href="https://en.wikipedia.org/wiki/Aurora"
        target="_blank"
        rel="noopener noreferrer"
      >
        Aurora Borealis
      </a>{" "}
      also known as Northern Lights which is predominantly seen in high-latitude
      regions.
    </Subtitle2>
    <Screenshot src={Demo} alt="screenshot" />
  </HeaderContainer>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Header
