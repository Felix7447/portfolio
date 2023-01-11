import styled, { css } from 'styled-components'

export const Figure = styled.figure`
  text-align: center;

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
`
