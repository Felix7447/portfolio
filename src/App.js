import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import containers from './containers/index'

const { Header, Footer, Introduction, AboutMe, Skills } = containers()

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Introduction />
      <AboutMe />
      <Skills />
      <Footer />
    </>
  )
}
