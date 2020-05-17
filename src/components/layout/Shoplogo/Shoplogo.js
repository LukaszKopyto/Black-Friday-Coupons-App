import React from 'react'
import ShopLogoWrapper from './ShopLogoWrapper'
import { promotedStores } from '../../../utils/promotedStores'

const Shoplogo = ({ shopName }) => {
  let imageLink = ''
  let bg = 'white'

  for (const store of promotedStores) {
    if (store.shopName === shopName) {
      imageLink = store.imageLink
      bg = store.bgColor
    }
  }

  return (
    <ShopLogoWrapper bg={bg}>
      <img src={imageLink} alt={shopName} />
      {/* <picture>
        <source srcset={imageLink} type='image/webp' />
      </picture> */}
    </ShopLogoWrapper>
  )
}

export default Shoplogo
