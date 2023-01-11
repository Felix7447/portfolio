import styled from 'styled-components'

export const FooterTag = styled.footer`
  display: grid;
  background-color: black;
  min-height: 200px;
  width: 100%;
  color: white;

  nav {
    grid-column: span 12;
    justify-self: center;
    align-self: center;
    margin-left: 0;

    @media (max-width: 720px) {
      display: flex;
      flex-direction: column;
      gap: 1em;
      
      button {
        content: '';
      }
    }
  }
`
