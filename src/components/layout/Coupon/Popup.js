import React from 'react'
import Popup from 'reactjs-popup'
import styled from 'styled-components'
import moment from 'moment'
import 'moment/locale/pl'
import Shoplogo from '../Shoplogo'
import { OfferTypeName } from './OfferTypeName'
import { AdditionalInfo } from './AdditionalInfo'
import Counter from './Counter'
import { CouponTitle } from './CouponTitle'
import { CouponDescription } from './CouponDescription'
import { IconWrapper } from './IconWrapper'
import PopupShowCode from './PopupShowCode'
import PopupCopiedCode from './PopupCopiedCode'
import { ReactComponent as FinishDate } from '../../../images/finishDate.svg'
import { ReactComponent as AmountOfUse } from '../../../images/amountOfUse.svg'

const PopupWrapper = styled(Popup).attrs({
  className: 'popup-content',
})`
  &.popup-content {
    border-radius: 6px;
    width: 728px !important;
    padding: 20px !important;
    background: ${({ theme }) => theme.colors.couponBg} !important;
  }
`
const style = {
  display: 'flex',
  fontSize: 12,
}

const columnStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
}

const PopupCoupon = ({
  voucher,
  couponLike,
  couponLikeColor,
  amountOfUse,
  copied,
  copy,
}) => {
  return (
    <PopupWrapper
      open={true}
      position='top center'
      modal
      closeOnDocoumentCliks
      closeOnEscape
    >
      <>
        <div style={style}>
          <Shoplogo shopName={voucher.shopName} />
          <div style={columnStyle}>
            <OfferTypeName>
              {voucher.offerTypeName === 'discount code' && 'Kod rabatowy'}
            </OfferTypeName>
            {voucher.additionalInfo && (
              <AdditionalInfo>{voucher.additionalInfo}</AdditionalInfo>
            )}
            <Counter like={couponLike} heartColor={couponLikeColor} />
          </div>
          <div style={columnStyle}>
            <CouponTitle>{voucher.title}</CouponTitle>
            <CouponDescription>{voucher.description}</CouponDescription>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '20px 0',
              }}
            >
              <IconWrapper>
                <span>
                  <FinishDate />
                </span>
                <span>
                  <strong>Kupon ważny do : </strong>
                  {voucher.finishDate
                    ? moment(voucher.finishDate).format(
                        'D MMMM YYYY, dddd, h:mm'
                      )
                    : 'do odwołania'}
                </span>
              </IconWrapper>
              <IconWrapper>
                <span>
                  <AmountOfUse />
                </span>
                <span>
                  <strong>Skorzystano z tego kuponu : </strong>
                  {amountOfUse} razy
                </span>
              </IconWrapper>
            </div>
          </div>
        </div>
        {copied ? (
          <PopupCopiedCode voucher={voucher} />
        ) : (
          <PopupShowCode voucher={voucher} copy={copy} />
        )}
      </>
    </PopupWrapper>
  )
}

export default PopupCoupon
