import React from 'react'
import ROUTES from '../../routes'

import { MenuContainer } from './style'

const MobileNavbar = ({ show }) => {
  const { home, about, skills, work, contact } = ROUTES

  return (
    <MenuContainer show={show}>
      <nav>
        <a href={home}>Home</a>
        <a href={about}>About</a>
        <a href={skills}>Skills</a>
        <a href={work}>Work</a>
        <a href={contact}>Contact</a>
      </nav>
    </MenuContainer>
  )
}

export default MobileNavbar
