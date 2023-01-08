import React from 'react'
import { Section, Aside, Main } from './style'

import Title from '../../components/Title'
import Description from '../../components/Description'
import BarLoader from '../../components/BarLoader'
import ResponsiveLoader from '../../components/ResponsiveLoader'

const Introduction = () => {
  return (
    <Section>
      <Aside>
        <BarLoader />
      </Aside>
      <Main>
        <Title size={56}> Web Developer & Problem Solver</Title>
        <Description size={18}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </Description>
      </Main>
      <Aside>
        <ResponsiveLoader />
      </Aside>
    </Section>
  )
}

export default Introduction
