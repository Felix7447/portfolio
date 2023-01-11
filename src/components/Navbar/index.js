import React from 'react'
import Button from '../Button'

import { Nav } from './styles'

import ROUTES from '../../routes'

const Navbar = ({ size, children }) => {
  const { home, about, skills, work } = ROUTES
  const color = 'white'

  return (
    <Nav>
      <Button route={home} color={color} size={size}>Home</Button>
      {children}
      <Button route={about} color={color} size={size}>About Me</Button>
      {children}
      <Button route={skills} color={color} size={size}>Skills</Button>
      {children}
      <Button route={work} color={color} size={size}>Work</Button>
    </Nav>
  )
}

export default Navbar
