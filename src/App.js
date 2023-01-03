import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import containers from './containers/index'

const { Header, Footer, Introduction } = containers()

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Introduction />
      <Footer />
    </>
  )
}
