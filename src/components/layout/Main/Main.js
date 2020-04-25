import React from 'react'
import Slider from '../Slider'
import Coupon from '../Coupon'
import { MainWrapper } from './MainWrapper'
import Button from '../Button'
import SectionInfo from '../SectionInfo'
import { CouponContainer } from '../Coupon/CouponContainer'

const Main = () => {
  return (
    <MainWrapper>
      <Slider />
      <CouponContainer>
        <Coupon />
        <Coupon />
        <Coupon />
        <Coupon />
      </CouponContainer>
      <Button ghostBtn textColor>
        Pokaż więcej kuponów
      </Button>
      <SectionInfo />
    </MainWrapper>
  )
}

export default Main
