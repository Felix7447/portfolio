import React, { useContext } from 'react'

import AppContext from '@utils/Context/AppContext'

import ROUTES from '@routes'

import { MenuContainer } from './style'

const MobileNavbar = ({ show, toggleScrollLock }) => {
  const { home, about, skills, work, contact } = ROUTES

  const { toggle } = useContext(AppContext)

  const closeMenu = () => {
    toggle()
    toggleScrollLock()
  }

  return (
    <MenuContainer show={show}>
      <nav>
        <a href={home} onClick={closeMenu}>Home</a>
        <a href={about} onClick={closeMenu}>About</a>
        <a href={skills} onClick={closeMenu}>Skills</a>
        <a href={work} onClick={closeMenu}>Work</a>
        <a href={contact} onClick={closeMenu}>Contact</a>
      </nav>
    </MenuContainer>
  )
}

export default MobileNavbar
