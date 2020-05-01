import React, { useState } from 'react'
import { CouponWrapper } from './CouponWrapper'
import Shoplogo from '../Shoplogo'
import { OfferTypeName } from './OfferTypeName'
import { AdditionalInfo } from './AdditionalInfo'
import Counter from './Counter'
import { ReactComponent as FinishDate } from '../../../images/finishDate.svg'
import { CouponTitle } from './CouponTitle'
import { CouponDescription } from './CouponDescription'
import { IconWrapper } from './IconWrapper'
import Button from '../Button'
import PlaceholderCoupon from '../PlaceholderCoupon'
import moment from 'moment'
import 'moment/locale/pl'
import CouponAmountOfUse from './CouponAmountOfUse'

const Coupon = ({ voucher }) => {
  const [couponlike, setCouponlike] = useState(
    Math.floor(Math.random() * (200 - 10 + 1) + 10)
  )
  const [couponlikeColor, setCouponlikeColor] = useState(false)
  const [amountOfUse, setAmountOfUse] = useState(
    Math.floor(Math.random() * (300 - 24 + 1) + 24)
  )

  const handleLikeClick = () => {
    if (couponlikeColor) {
      return
    } else {
      setCouponlike((prevState) => prevState + 1)
      setCouponlikeColor((prevState) => !prevState)
    }
  }

  const handleAmountOfUse = () => {
    setAmountOfUse((prevState) => prevState + 1)
  }

  if (voucher) {
    console.log('render komponentu Coupon')

    let offerTypeName = ''
    if (voucher.offerTypeName === 'discount code') {
      offerTypeName = 'Kod rabatowy'
    } else if (voucher.offerTypeName === 'free shipping') {
      offerTypeName = 'Darmowa dostawa'
    } else {
      offerTypeName = 'Promocja'
    }

    const style = {
      display: 'flex',
      fontSize: 12,
    }
    return (
      <CouponWrapper>
        <div style={style}>
          <Shoplogo />
          <div>
            <OfferTypeName>{offerTypeName}</OfferTypeName>
            {voucher.additionalInfo && (
              <AdditionalInfo>{voucher.additionalInfo}</AdditionalInfo>
            )}

            <Counter
              click={handleLikeClick}
              like={couponlike}
              heartColor={couponlikeColor}
            />
          </div>
        </div>
        <CouponTitle>{voucher.title}</CouponTitle>
        <CouponDescription>{voucher.description}</CouponDescription>
        <div style={style}>
          <IconWrapper>
            <span>
              <FinishDate />
            </span>
            <span>
              {voucher.finishDate
                ? moment().to(voucher.finishDate)
                : 'do odwołania'}
            </span>
          </IconWrapper>
          <CouponAmountOfUse amountOfUse={amountOfUse} />
        </div>
        <Button margin={'17px 0 0'} click={handleAmountOfUse}>
          Pokaż kod
        </Button>
      </CouponWrapper>
    )
  }
  return <PlaceholderCoupon />
}

export default Coupon
