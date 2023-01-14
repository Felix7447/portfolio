import React from 'react'

import { Section, Carousel } from './style'

import SubTitle from '@components/Subtitle'
import Card from '@components/Card'

import Projects from '@routes/projects'

const Work = () => {
  return (
    <Section data-aos='fade-up'>
      <SubTitle size='32px'>Work <a id='/work' /></SubTitle>
      <Carousel>
        {
          Projects.map(element => (
            <Card key={`card-${element.name}`} src={element.image} name={element.name} github={element.github} link={element.link} />
          ))
        }
      </Carousel>
    </Section>
  )
}

export default Work
