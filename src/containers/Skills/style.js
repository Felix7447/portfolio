import styled from 'styled-components'

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  min-height: 100vh;
  margin: 2em 0;
  
  @media (max-width: 720px) {
    place-items: center;
  }

  h2 {
    margin: 0 2em;
    grid-column: span 12;
  }

  figure {
    grid-column: span 4;
    justify-self: center;
    
    @media (max-width: 960px) {
      grid-column: span 4;

      img {
        width: 140px;
        height: 140px;
      }
    }

    @media (max-width: 480px) {
      grid-column: span 6;

      img {
        width: 80px;
        height: 80px;
      }
    }
  }
`
