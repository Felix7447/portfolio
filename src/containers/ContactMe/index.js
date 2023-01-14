import React from 'react'

import { Section, Contact } from './style'

import EmailLogo from '@assets/icons/gmail-logo.png'
import LinkedinLogo from '@assets/icons/linkedin-logo.png'
import GithubLogo from '@assets/icons/github-logo.png'

import SubTitle from '../../components/Subtitle'
import Button from '../../components/Button'
import Image from '../../components/Image'
import P from '../../components/Description'

const size = '124px'

const ContactMe = () => {
  return (
    <Section data-aos='fade-up'>
      <SubTitle size='42px'>
        <i>Get in Touch</i>
        <a id='/contact' />
      </SubTitle>
      <Contact>
        <Button route='mailto:felixreyna48@gmail.com' target='_blank'>
          <Image src={EmailLogo} text='E-mail' width={size} />
        </Button>
        <Button route='https://www.linkedin.com/in/felix-reyna/' target='_blank'>
          <Image src={LinkedinLogo} text='Linkedin' width={size} />
        </Button>
        <Button route='https://github.com/Felix7447' target='_blank'>
          <Image src={GithubLogo} text='GitHub' width={size} />
        </Button>
      </Contact>
      <P size='24px'>
        Don't be shy! please sent me an Email or text me on Linkedin I will feel happy about it
        <span> &#128516;</span> also you can see my projects on my Github. Remember:
        <i> "Opportunities will come, just keep going & get prepared"</i>
        <br />
        <br />
        <i>-Felix Reyna</i>
      </P>
    </Section>
  )
}

export default ContactMe
