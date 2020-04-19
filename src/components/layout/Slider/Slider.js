import React from 'react'
import SliderWrapper from './SliderWrapper'
import SliderItem from './SliderItem'
import { promotedStores } from '../../../utils/promotedStores'

const Slider = () => {
  return (
    <SliderWrapper>
      {promotedStores.map((shop, id) => (
        <a href={shop.link} key={id}>
          <SliderItem bg={shop.bgColor}>
            <img src={shop.image} alt={shop.alt} />
          </SliderItem>
        </a>
      ))}
    </SliderWrapper>
  )
}

export default Slider
