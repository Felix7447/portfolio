import styled from 'styled-components'

export const HeaderTag = styled.header`
  z-index: 100;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: black;
  color: white;
  min-height: 15vh;
  width: 100%;
  align-items: center;
`

export const Nav = styled.nav`
  grid-column: span 8;
  text-align: left;
  margin-left: 4em;
  @media (max-width: 720px) {
    display: none;
  }
`

export const Aside = styled.aside`
  grid-column: span 4;
  text-align: right;
  margin-right: 4em;
  @media (max-width: 720px) {
    margin-right: 7em;
    grid-column: 9 / 11;
  }
  button {
    @media (max-width: 720px) {
      width: 120px;
      margin-right: 24px;
      border: none;
    }
  }
`
