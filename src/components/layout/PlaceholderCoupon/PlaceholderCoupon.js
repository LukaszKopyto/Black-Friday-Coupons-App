import React from 'react'
import { PlaceholderElement } from './PlaceholderElement'
import { PlaceholderWrapper } from './PlaceholderWrapper'

const PlaceholderCoupon = ({ n }) => {
  const iterationNum = []

  for (let i = 0; i < n; i++) {
    iterationNum.push(i)
  }

  return (
    <>
      {iterationNum.map((item, id) => (
        <PlaceholderWrapper key={id}>
          <div style={{ display: 'flex' }}>
            <PlaceholderElement
              width={'111px'}
              height={'111px'}
              margin={'0 16px 0 0'}
            />
            <div>
              <PlaceholderElement
                width={'87px'}
                height={'20px'}
                margin={'6px'}
              />
              <PlaceholderElement
                width={'87px'}
                height={'20px'}
                margin={'10px 6px'}
              />
              <PlaceholderElement
                width={'87px'}
                height={'40px'}
                margin={'15px 6px'}
              />
            </div>
          </div>
          <PlaceholderElement
            width={'267px'}
            height={'20px'}
            margin={'0 0 6px'}
          />
          <PlaceholderElement
            width={'267px'}
            height={'20px'}
            margin={'6px 0'}
          />
          <PlaceholderElement
            width={'267px'}
            height={'20px'}
            margin={'6px 0'}
          />
          <PlaceholderElement
            width={'267px'}
            height={'40px'}
            margin={'20px 0 0'}
          />
        </PlaceholderWrapper>
      ))}
    </>
  )
}

export default PlaceholderCoupon
