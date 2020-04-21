import React from 'react'
import Slider from '../Slider'
import Coupon from '../Coupon'
import { MainWrapper } from './MainWrapper'

const Main = () => {
  return (
    <MainWrapper>
      <Slider />
      <Coupon />
      <Coupon />
    </MainWrapper>
  )
}

export default Main
