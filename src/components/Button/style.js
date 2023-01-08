import styled from 'styled-components'

export const ButtonTag = styled.button`
  background-color: transparent;
  margin: 0 1em;
  border: none;
`

export const Anchor = styled.a`
  color: ${props => props.color || 'black'};
  text-decoration: none;
  h3 {
    font-weight: inherit;
    font-size: ${props => props.size};
    @media (max-width: 720px) {
      font-size: 18px;
    }
  }
`
