import styled from 'styled-components'

export const CardTag = styled.div`
  display: inline-block;
  position: relative;
  margin: 2em .5em;
  transition: all .5s;
  transform-origin: center left;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);

    div { 
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 1;
    }
  }

  img {
    width: 292px;
    border: 4px white solid;
    border-radius: 12px;
  }

  h3 {
    text-align: center;
  }
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5em;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  opacity: 0;
  transition: all .5s;

  @media (max-width: 720px) {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.3);
  }

  button {
    border: 2px white solid;
    border-radius: 12px;
    transition: all .5s;

    &:hover {
      background-color: white;
      h3 {
        transition: all .5s;
        color: black;
      }
    }
  }
`
