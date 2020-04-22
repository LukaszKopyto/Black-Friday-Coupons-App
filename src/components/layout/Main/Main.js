import React from 'react'
import Slider from '../Slider'
import Coupon from '../Coupon'
import { MainWrapper } from './MainWrapper'
import Button from '../Button'
import SectionInfo from '../SectionInfo'

const Main = () => {
  return (
    <MainWrapper>
      <Slider />
      <Coupon />
      <Coupon />
      <Button ghostBtn textColor margin={40}>
        Pokaż więcej kuponów
      </Button>
      <SectionInfo />
    </MainWrapper>
  )
}

export default Main
