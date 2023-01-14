import React, { useContext } from 'react'

import { Figure, Image, Button } from './style'

import burgerMenuImage from '@assets/icons/burger-menu.png'

import MobileNavbar from '../MobileNavbar'

import useScrollLock from '@utils/Hooks/useScrollLock'
import AppContext from '@utils/Context/AppContext'

const BurgerMenu = () => {
  const { showMenu, toggle } = useContext(AppContext)
  const { toggleScrollLock } = useScrollLock()

  const handleMenu = () => {
    toggle()
    toggleScrollLock()
  }

  return (
    <>
      <Button onClick={handleMenu}>
        <Figure>
          <Image src={burgerMenuImage} alt='Burger Menu' />
        </Figure>
      </Button>
      <MobileNavbar show={showMenu} toggleScrollLock={toggleScrollLock} />
    </>
  )
}

export default BurgerMenu
