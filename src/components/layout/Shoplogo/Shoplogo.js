import React from 'react'
import ShopLogoWrapper from './ShopLogoWrapper'
import sephora from '../../../images/Sephora.jpg'

const Shoplogo = ({ img }) => {
  return (
    <ShopLogoWrapper>
      <img src={img} alt='Sephora' />
    </ShopLogoWrapper>
  )
}

export default Shoplogo
