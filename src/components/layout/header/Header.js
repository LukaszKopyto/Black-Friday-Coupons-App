import React from 'react'
import Logo from '../Logo/Logo'
import Title from '../title/Title'
import CountdownTimer from '../Countdown'
import HeaderWrapper from './HeaderWrapper'

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Title />
      <CountdownTimer />
    </HeaderWrapper>
  )
}

export default Header
