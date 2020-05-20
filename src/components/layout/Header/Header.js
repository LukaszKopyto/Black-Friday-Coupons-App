import React from 'react'
import Logo from '../Logo'
import Title from '../Title'
import HeaderWrapper from './HeaderWrapper'
import Button from '../Button'
import { LogoAndButtonWrapper } from './LogoAndButtonWrapper'

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoAndButtonWrapper>
        <Logo />
        <Button ghostBtn margin={'25px 0 0'}>
          wróc do Alerabat.com
        </Button>
      </LogoAndButtonWrapper>
      <Title>
        <span>Black</span> Friday 2020
      </Title>
      <Title as='h2' title='medium'>
        Najnowsze promocje
      </Title>
    </HeaderWrapper>
  )
}

export default Header
