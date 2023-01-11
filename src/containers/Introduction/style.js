import styled from 'styled-components'

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  place-items: center;
  min-height: 77vh;
  margin: 2em 0;
  margin-top: 18vh;
`

export const Main = styled.main`
  grid-column: span 6;
  text-align: center;
  
  @media (max-width: 960px) {
    grid-column: span 12;
  }
`

export const Aside = styled.aside`
  grid-column: span 3;
  position: relative;

  @media (max-width: 960px) {
    display: none;
  }
`
