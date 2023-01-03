import styled from 'styled-components'

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  place-items: center;
  min-height: 50vh;
  margin: 2em 0;
`

export const Main = styled.main`
  grid-column: span 6;
  text-align: center;
`

export const Aside = styled.aside`
  grid-column: span 3;
`
