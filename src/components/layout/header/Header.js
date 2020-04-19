import React from 'react'
import Logo from '../Logo'
import Title from '../Title'
import HeaderWrapper from './HeaderWrapper'
import Button from '../Button'

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Button />
      <Title>
        <span>Black</span> Friday 2020
      </Title>
      <Title as='h2' h2>
        Najnowsze promocje
      </Title>
    </HeaderWrapper>
  )
}

export default Header
