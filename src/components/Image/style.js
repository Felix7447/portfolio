import styled, { css } from 'styled-components'

export const ImageTag = styled.img`
  ${props =>
    css`
      width: ${props.width};
      border: ${props.border};
      border-radius: ${props.rounded};
    `
  }
`
