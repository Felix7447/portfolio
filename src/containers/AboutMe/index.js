import React from 'react'

import { Section } from './style'
import ProfileImage from '@assets/images/web-developer-profile.jpeg'

import SubTitle from '../../components/Subtitle'
import Description from '../../components/Description'
import Button from '../../components/Button'
import Image from '../../components/Image'

const AboutMe = () => {
  return (
    <Section data-aos='fade-up'>
      <SubTitle size='32px'><a id='/about' /> About Me </SubTitle>
      <Image src={ProfileImage} name='Felix Reyna' width='75%' border='4px white solid' rounded='50%' />
      <aside>
        <Description size='22px'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </Description>
        <Button color='white' size='24px'>Download CV</Button>
      </aside>
    </Section>
  )
}

export default AboutMe
