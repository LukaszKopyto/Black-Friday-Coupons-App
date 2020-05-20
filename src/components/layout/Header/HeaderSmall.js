import React from 'react'
import Logo from '../Logo'
import Title from '../Title'
import HeaderWrapper from './HeaderWrapper'
import { LogoAndButtonWrapper } from './LogoAndButtonWrapper'

const HeaderSmall = () => {
  return (
    <HeaderWrapper small>
      <LogoAndButtonWrapper small>
        <Logo small />
      </LogoAndButtonWrapper>
      <Title title='small'>Black Friday 2020</Title>
    </HeaderWrapper>
  )
}

export default HeaderSmall
