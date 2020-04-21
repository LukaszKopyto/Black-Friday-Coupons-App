import React from 'react'
import SliderWrapper from './SliderWrapper'
import SliderItem from './SliderItem'
import { promotedStores } from '../../../utils/promotedStores'

const Slider = () => {
  return (
    <SliderWrapper>
      {promotedStores.map((shop, id) => (
        <li key={id}>
          <a href={shop.link}>
            <SliderItem bg={shop.bgColor}>
              <img src={shop.image} alt={shop.alt} />
            </SliderItem>
          </a>
        </li>
      ))}
    </SliderWrapper>
  )
}

export default Slider
