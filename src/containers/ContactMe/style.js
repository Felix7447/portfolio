import styled from 'styled-components'

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  min-height: 77vh;
  margin: 2em 0;
  
  @media (max-width: 720px) {
    place-items: center;
  }

  h2 {
    margin: 1em 0;
    grid-column: span 12;
    justify-self: center;

    @media (max-width: 720px) {
      margin: 0;
    }
  }

  p {
    grid-column: 4 / 10;
    align-self: center;
    text-align: center;

    @media (max-width: 720px) {
      grid-column: 2 / 12;
      font-size: 18px;
    }
  }
`

export const Contact = styled.div`
  grid-column: span 12;
  justify-self: center;
  display: flex;
  gap: 64px;
  margin: 2em 0;
  
  @media (max-width: 720px) {
    flex-direction: column;
    gap: 28px;
    margin: 1em 0;

    img {
      width: 98px;
    }
  }
`
