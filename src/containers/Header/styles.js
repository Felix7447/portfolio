import styled from 'styled-components'

export const HeaderTag = styled.header`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: black;
  color: white;
  min-height: 100px;
  width: 100%;
  align-items: center;
`

export const Nav = styled.nav`
  grid-column: span 8;
  text-align: left;
  margin-left: 4em;
`

export const Aside = styled.aside`
  grid-column: span 4;
  text-align: right;
  margin-right: 4em;
`

export const Label = styled.label`
  margin: 0 1em;
`
