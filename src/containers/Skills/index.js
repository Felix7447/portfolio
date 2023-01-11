import React from 'react'

import { Section } from './style'

import SubTitle from '../../components/Subtitle'
import Icon from '../../components/Icon'

import HtmlLogo from '@assets/icons/html-logo.png'
import CssLogo from '@assets/icons/css3-logo.png'
import JSLogo from '@assets/icons/javascript-logo.png'
import WebpackLogo from '@assets/icons/webpack-logo.png'
import SassLogo from '@assets/icons/sass-logo.png'
import GithubLogo from '@assets/icons/github-logo.png'

const Skills = () => {
  return (
    <Section>
      <SubTitle size='32px'>Skills<a id='/skills' /></SubTitle>
      <Icon src={HtmlLogo} text='HTML' size='180px' />
      <Icon src={CssLogo} text='CSS' size='180px' />
      <Icon src={JSLogo} text='JavaScript' size='180px' />
      <Icon src={WebpackLogo} text='Webpack' size='180px' />
      <Icon src={SassLogo} text='Sass' size='180px' />
      <Icon src={GithubLogo} text='Git Hub' size='180px' />
    </Section>
  )
}

export default Skills
