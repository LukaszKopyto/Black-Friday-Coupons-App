import React from 'react'
import { Link } from 'react-router-dom'
import SliderWrapper from './SliderWrapper'
import SliderItem from './SliderItem'
import { promotedStores } from '../../../utils/promotedStores'

const Slider = () => {
  return (
    <SliderWrapper>
      {promotedStores.map((shop, id) => (
        <li key={id}>
          <Link to={`/${shop.shopName}`}>
            <SliderItem bg={shop.bgColor}>
              <img src={shop.imageLink} alt={shop.alt} />
            </SliderItem>
          </Link>
        </li>
      ))}
    </SliderWrapper>
  )
}

export default Slider
