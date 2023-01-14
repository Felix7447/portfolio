import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import containers from './containers/index'

import AppContext from './utils/Context/AppContext'
import useShowMenu from './utils/Hooks/useShowMenu'

const {
  Header,
  Introduction,
  AboutMe,
  Skills,
  Work,
  ContactMe,
  Footer
} = containers()

export const App = () => {
  const showMenu = useShowMenu()

  return (
    <AppContext.Provider value={showMenu}>
      <GlobalStyle />
      <Header />
      <Introduction />
      <AboutMe />
      <Skills />
      <Work />
      <ContactMe />
      <Footer />
    </AppContext.Provider>
  )
}
