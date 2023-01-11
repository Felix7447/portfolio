import styled from 'styled-components'

export const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  margin: 2em 0;
  background-color: black;
  color: white;

  a {
    height: 0px;
    visibility: none;
  }

  h2 {
    margin: 1em 0 0 2em;
    
    @media (max-width: 960px) {
      justify-self: center;
      margin: 0;
      margin-top: 1em;
    }
  }
`

export const Carousel = styled.div`
  white-space: nowrap;
  transition: all .5s;
  overflow-x: scroll;
  grid-column: span 12;
  padding: 0 1em;
  align-self: center;
  cursor: pointer;

  &::-webkit-scrollbar {
    border-radius: 24px;
    height: 12px;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(94, 92, 92, 1);
    border-radius: 24px;
  }

  @media (max-width: 720px) {
    &::-webkit-scrollbar {
      border-radius: 24px;
      height: 12px;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(94, 92, 92, 1);
      border-radius: 24px;
    }
  }

  div {
    &:hover ~ div {
      transform: translate3d(1em, 0, 0);
    }
  }

`
