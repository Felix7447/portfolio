import styled, { css } from 'styled-components'

export const MenuContainer = styled.div`
  position: absolute;
  top: 15vh;
  left: -700px;
  transition: all .5s;
  
  ${(props) => {
    if (props.show) {
      return css`
        transform: translate(700px);
      `
    }
  }};
  

  @media (max-width: 720px) {
    width: 80%;
    height: 100%;
    background-color: black;
    border: 2px #333 solid;

    &::before {
      content: '';
      position: absolute;
      left: 101%;
      width: 25%;
      height: 101%;
      background-color: rgba(0, 0, 0, 0.3);
    }

    nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1em;
      margin: 3em 0;
    }

    a {
      text-decoration: none;
      color: white;
      font-size: 24px;
    }
  }
`
