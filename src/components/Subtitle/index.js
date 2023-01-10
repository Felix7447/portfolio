import React from 'react'

import { SubTitleTag } from './style'

const SubTitle = ({ children, size }) => {
  return (
    <SubTitleTag size={size}>
      {children}
    </SubTitleTag>
  )
}

export default SubTitle
