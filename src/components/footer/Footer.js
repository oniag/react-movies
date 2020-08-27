import React from 'react'
import { FooterPage } from './styles'

const year = () => {
  let date = new Date().getFullYear()
  return date
}

const Footer = () => (
  <FooterPage>
    <p>
      React <span>Movies</span> <small>Todos os direitos reservados - {year()}</small>
    </p>
  </FooterPage>
)

export default Footer