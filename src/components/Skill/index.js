import React from 'react'

import { Figure } from './style'

const Skill = ({ text, src }) => {
  return (
    <Figure>
      <img src={src} alt={text} />
      <h3>{text}</h3>
    </Figure>
  )
}

export default Skill
