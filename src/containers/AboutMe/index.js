import React from 'react'

import { Section } from './style'
import ProfileImage from '@assets/images/web-developer-profile.jpeg'

import SubTitle from '@components/Subtitle'
import Description from '@components/Description'
import Button from '@components/Button'
import Image from '@components/Image'

import resume from '@public/ResumePDF.pdf'

const AboutMe = () => {
  return (
    <Section data-aos='fade-up'>
      <SubTitle size='32px'><a id='/about' /> About Me </SubTitle>
      <Image src={ProfileImage} name='Felix Reyna' width='75%' border='4px white solid' rounded='50%' />
      <aside>
        <Description size='22px'>
          Hi! I'm <b>Felix Reyna</b>, nice to meet you. I'm a Frontend Web Developer with skills on
          <span> HTML, CSS, JavaScript and currently practicing React</span>. Also I'm a
          Telecommunications Engineer student from Universidad Jose Antonio Paez in Venezuela where I
          collaborated with colleagues to develop, build projects & solve problems. Passionate for
          programming, facing problems & self-motivated to achieve my goals. Never Give Up!
        </Description>
        <Button color='white' size='24px' route={resume} target='_blank'>
          Download Resume
        </Button>
      </aside>
    </Section>
  )
}

export default AboutMe
