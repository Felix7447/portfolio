import React from 'react'

import { HeaderTag, Aside } from './styles'

import Navbar from '@components/Navbar'
import Button from '@components/Button'
import BurgerMenu from '@components/BurgerMenu'

import ROUTES from '@routes'

const Header = () => {
  const { contact } = ROUTES

  return (
    <HeaderTag>
      <BurgerMenu />
      <Navbar />
      <Aside>
        <Button route={contact} color='white'>Get in touch!</Button>
      </Aside>
    </HeaderTag>
  )
}

export default Header
