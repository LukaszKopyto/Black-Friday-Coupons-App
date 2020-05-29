import React from 'react'
import { Wrapper } from './Wrapper'
import { promotedStores } from '../../../utils/promotedStores'

const ShopDescription = ({ shop }) => {
  return (
    <>
      <Wrapper>
        {promotedStores.map(
          (item, id) =>
            item.shopName === shop && (
              <React.Fragment key={id}>{item.description}</React.Fragment>
            )
        )}
      </Wrapper>
    </>
  )
}

export default ShopDescription
