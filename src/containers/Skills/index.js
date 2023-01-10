import React from 'react'

import { Section } from './style'

import SubTitle from '../../components/Subtitle'
import Skill from '../../components/Skill'

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
      <Skill src={HtmlLogo} text='HTML' />
      <Skill src={CssLogo} text='CSS' />
      <Skill src={JSLogo} text='JavaScript' />
      <Skill src={WebpackLogo} text='Webpack' />
      <Skill src={SassLogo} text='Sass' />
      <Skill src={GithubLogo} text='Git Hub' />
    </Section>
  )
}

export default Skills
