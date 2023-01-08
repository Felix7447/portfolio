import React from 'react'
import { Loader } from './style'

const BarLoader = () => {
  return (
    <Loader>
      <div className='loader__bar' />
      <div className='loader__bar' />
      <div className='loader__bar' />
      <div className='loader__bar' />
      <div className='loader__bar' />
      <div className='loader__ball' />
    </Loader>
  )
}

export default BarLoader
