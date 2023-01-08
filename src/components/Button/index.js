import React from 'react'
import { ButtonTag, Anchor } from './style'

const Button = ({ children, route = '/', color, size }) => {
  return (
    <ButtonTag>
      <Anchor color={color} size={size} href={route}>
        <h3>
          {children}
        </h3>
      </Anchor>
    </ButtonTag>
  )
}

export default Button
