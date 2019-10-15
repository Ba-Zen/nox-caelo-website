import React from "react"
import styled from "styled-components"
import { theme, mixins } from "@styles"
const { colors, fontSizes } = theme
//import Logo from '../images/logo.png';

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  color: ${colors.grey};
  font-size: ${fontSizes.base};
  text-align: center;
  padding: 50px 25px;
  margin: 0 auto;
  margin-top: 100px;
  img {
    width: 70px;
    margin-bottom: 50px;
  }
  a {
    padding: 10px 15px;
    background-color: ${colors.active};
    color: ${colors.white};
    &:hover,
    &:focus {
      background-color: ${colors.accent};
      color: ${colors.bg};
    }
  }
`

const Footer = () => (
  <FooterContainer>
    <a href="https://bazen.dev" target="_blank" rel="noopener noreferrer">
      Made by Bazen Berhane
    </a>
  </FooterContainer>
)

export default Footer
