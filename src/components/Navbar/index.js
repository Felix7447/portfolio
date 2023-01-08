import React from 'react'
import Button from '../Button'

import { Nav } from './styles'

import ROUTES from '../../routes'

const Navbar = () => {
  const { home, about, skills, work } = ROUTES

  return (
    <Nav>
      <Button route={home} color='white'>Home</Button>
      <Button route={about} color='white'>About Me</Button>
      <Button route={skills} color='white'>Skills</Button>
      <Button route={work} color='white'>Work</Button>
    </Nav>
  )
}

export default Navbar
