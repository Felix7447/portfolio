import React from 'react'

import { CardTag, CardInfo } from './style'
import Button from '../../components/Button'

const Card = ({ name, src, github, link }) => {
  return (
    <CardTag>
      <img src={src} alt={name} />
      <CardInfo>
        <Button color='white' route={github} target='_blank'>Git Hub</Button>
        <Button color='white' route={link} target='_blank'>Link</Button>
      </CardInfo>
      <h3>{name}</h3>
    </CardTag>
  )
}

export default Card
