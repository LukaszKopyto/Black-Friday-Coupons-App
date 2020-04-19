import React from 'react'
import uberEats from '../../../images/uberEats.png'
import SliderWrapper from './SliderWrapper'
import SliderItem from './SliderItem'

const Slider = () => {
  return (
    <SliderWrapper>
      <SliderItem>
        <img src={uberEats} alt='test' />
      </SliderItem>
      <SliderItem>
        <img src={uberEats} alt='test' />
      </SliderItem>
      <SliderItem>
        <img src={uberEats} alt='test' />
      </SliderItem>
      <SliderItem>
        <img src={uberEats} alt='test' />
      </SliderItem>
      <SliderItem>
        <img src={uberEats} alt='test' />
      </SliderItem>
    </SliderWrapper>
  )
}

export default Slider
