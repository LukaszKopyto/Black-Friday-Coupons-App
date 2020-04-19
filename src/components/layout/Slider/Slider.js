import React from 'react'
import SliderWrapper from './SliderWrapper'
import SliderItem from './SliderItem'
import { promotedStores } from '../../../utils/promotedStores'

const Slider = () => {
  return (
    <SliderWrapper>
      {promotedStores.map((shop) => (
        <a href={shop.link}>
          <SliderItem bg={shop.bgColor} key={shop.alt}>
            <img src={shop.image} alt={shop.alt} />
          </SliderItem>
        </a>
      ))}
    </SliderWrapper>
  )
}

export default Slider
