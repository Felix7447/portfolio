import React from 'react'
import { TitleTag } from './style'

const Title = ({ children, size }) => {
  return (
    <TitleTag size={size}>
      {children}
    </TitleTag>
  )
}

export default Title
