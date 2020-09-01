import React from 'react'
import { Menu, Nav }  from './styles'

const Header = () => (
  <Menu>
    <Nav>
      <p>
        <a href="/" rel="noopener noreferrer">
          React <span>Movies</span>
        </a>
      </p>
    </Nav>
  </Menu>
)

export default Header