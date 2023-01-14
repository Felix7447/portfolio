import styled, { css } from 'styled-components'

export const Figure = styled.figure`
  text-align: center;
  transition: .5s all;
  cursor: pointer;

  ${props => {
    return (
      css`
        img {
          width: ${props.size};
          height: ${props.size};
        }
      `
    )
  }}

  &:hover {
    transform: scale(1.2);
  }
`
