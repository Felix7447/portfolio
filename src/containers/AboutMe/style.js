import styled from 'styled-components'

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 84px auto;
  min-height: 77vh;
  margin: 2em 0;
  background-color: black;
  color: white;

  @media (max-width: 960px) {
    place-items: center;
  }

  a {
    height: 0px;
    visibility: none;
  }

  h2 {
    margin: 1em 0 0 2em;

    @media (max-width: 960px) {
      margin: 0;
    }

  }

  img {
    grid-column: span 4;
    justify-self: center;
    align-self: center;

    @media (max-width: 960px) {
      width: 38%;
      grid-column: span 12;
    }

    @media (max-width: 720px) {
      width: 60%;
      grid-column: span 12;
    }
  }

  aside {
    grid-column: span 8;
    align-self: center;

    @media (max-width: 960px) {
      grid-column: span 12;
      text-align: center;
      margin: 2em 0;
    }

    p {
      margin: 1em 0;
      margin-right: 2em;

      @media (max-width: 960px) {
        margin: 0 2em;
      }

      @media (max-width: 720px) {
        font-size: 18px;
      }
    }

    button {
      margin: 1em 0;
      padding: 1em;
      border: 2px white solid;
      border-radius: 12px;

      &:hover {
        border-color: #056acb;
        h3 {
          color: #2596be;
        }
      }
    }
  }
`
