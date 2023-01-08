import React, { useState } from 'react'
import burgerMenuImage from '../../assets/icons/burger-menu.png'
import MobileNavbar from '../MobileNavbar'

import { Figure, Image, Button } from './style'

const BurgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <Button onClick={handleMenu}>
        <Figure>
          <Image src={burgerMenuImage} alt='Burger Menu' />
        </Figure>
      </Button>
      <MobileNavbar show={showMenu} />
    </>
  )
}

export default BurgerMenu
