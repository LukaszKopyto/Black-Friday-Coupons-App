import React from 'react'
import { CouponWrapper } from './CouponWrapper'
import Shoplogo from '../Shoplogo'
import { OfferTypeName } from './OfferTypeName'
import { AdditionalInfo } from './AdditionalInfo'
import { Counter } from './Counter'
import { ReactComponent as Heart } from '../../../images/heart.svg'
import { ReactComponent as FinishDate } from '../../../images/finishDate.svg'
import { ReactComponent as AmountOfUse } from '../../../images/amountOfUse.svg'
import { CouponTitle } from './CouponTitle'
import { CouponDescription } from './CouponDescription'
import { IconWrapper } from './IconWrapper'
import Button from '../Button'
import PlaceholderCoupon from '../PlaceholderCoupon'

const Coupon = ({ voucher }) => {
  if (voucher) {
    console.log(`voucher: `, voucher)

    const style = {
      display: 'flex',
      fontSize: 12,
    }
    return (
      <CouponWrapper>
        <div style={style}>
          <Shoplogo />
          <div>
            <OfferTypeName>Kod rabatowy</OfferTypeName>
            <AdditionalInfo>Tylko u nas</AdditionalInfo>
            <Counter>
              <span>
                <Heart />
              </span>
              <span>142</span>
            </Counter>
          </div>
        </div>
        <CouponTitle>{voucher.title}</CouponTitle>
        <CouponDescription>{voucher.description}</CouponDescription>
        <div style={style}>
          <IconWrapper>
            <span>
              <FinishDate />
            </span>
            <span>2 tygodnie</span>
          </IconWrapper>
          <IconWrapper>
            <span>
              <AmountOfUse />
            </span>
            <span>1532</span>
          </IconWrapper>
        </div>
        <Button margin={'17px 0 0'}>Pokaż kod</Button>
      </CouponWrapper>
    )
  }
  return <PlaceholderCoupon />
}

export default Coupon
