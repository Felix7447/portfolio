import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import containers from './containers/index'

const { Header, Footer, Introduction, AboutMe } = containers()

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Introduction />
      <AboutMe />
      <Footer />
    </>
  )
}
