import React from 'react'

import { Figure } from './style'

const Icon = ({ text, src, size }) => {
  return (
    <Figure size={size}>
      <img src={src} alt={text} />
      <h3>{text}</h3>
    </Figure>
  )
}

export default Icon
