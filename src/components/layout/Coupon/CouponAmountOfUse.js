import React from 'react'
import { IconWrapper } from './IconWrapper'
import { ReactComponent as AmountOfUse } from '../../../images/amountOfUse.svg'

const CouponAmountOfUse = ({ amountOfUse }) => {
  return (
    <IconWrapper>
      <span>
        <AmountOfUse />
      </span>
      <span>{amountOfUse}</span>
    </IconWrapper>
  )
}

export default CouponAmountOfUse
