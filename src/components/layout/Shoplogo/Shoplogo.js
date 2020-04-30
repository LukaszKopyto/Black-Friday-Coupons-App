import React from 'react'
import ShopLogoWrapper from './ShopLogoWrapper'
import sephora from '../../../images/Sephora.jpg'

const Shoplogo = () => {
  return (
    <ShopLogoWrapper>
      <img src={sephora} alt='Sephora' />
    </ShopLogoWrapper>
  )
}

export default Shoplogo
