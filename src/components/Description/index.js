import React from 'react'
import { P } from './style'

const Description = ({ children, size }) => {
  return (
    <P size={size}>
      {children}
    </P>
  )
}

export default Description
