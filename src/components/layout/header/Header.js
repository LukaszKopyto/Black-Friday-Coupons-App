import React from 'react'
import Logo from '../Logo'
import Title from '../Title'
import HeaderWrapper from './HeaderWrapper'
import Button from '../Button'
import Slider from '../Slider'
import Coupon from '../Coupon'

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Button ghostBtn>wróc do Alerabat.com</Button>
      <Title>
        <span>Black</span> Friday 2020
      </Title>
      <Title as='h2' h2>
        Najnowsze promocje
      </Title>
      <Slider />
      <Coupon />
      <Coupon />
    </HeaderWrapper>
  )
}

export default Header
