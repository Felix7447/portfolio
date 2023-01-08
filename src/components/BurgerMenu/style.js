import styled from 'styled-components'

export const Button = styled.button`
  background-color: transparent;
  display: none;
  border: none;
  cursor: pointer;
  
  @media (max-width: 720px) {
    display: block;
  }
`

export const Figure = styled.figure`
  margin: 0 1.5em;
  
`

export const Image = styled.img`
  width: 50px;
`
