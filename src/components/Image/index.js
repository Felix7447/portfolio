import React from 'react'

import { ImageTag } from './style'

const Image = ({ name, src, width, border, rounded }) => {
  return (
    <ImageTag src={src} alt={name} width={width} border={border} rounded={rounded} />
  )
}

export default Image
