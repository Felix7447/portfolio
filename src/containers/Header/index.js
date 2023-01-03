import React from 'react'
import { HeaderTag, Nav, Label, Aside } from './styles'

const Header = () => {
  return (
    <HeaderTag>
      <Nav>
        <Label>Home</Label>
        <Label>About Me</Label>
        <Label>Skills</Label>
        <Label>Work</Label>
      </Nav>
      <Aside>
        <Label align='right'>Contact me!</Label>
      </Aside>
    </HeaderTag>
  )
}

export default Header
