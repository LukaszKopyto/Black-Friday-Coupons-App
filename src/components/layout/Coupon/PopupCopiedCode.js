import React from 'react'
import { ShowCodeButton } from './ShowCodeButton'
import { ShowVoucherWrapper } from './ShowVoucherWrapper'

const PopupCopiedCode = ({ voucher, mobile }) => {
  return (
    <ShowVoucherWrapper mobile={mobile}>
      <ShowCodeButton bg={'#00e11e'}>Kod skopiowano do schowka</ShowCodeButton>
      <h4>
        <a href={voucher.directLink}>
          Przejdź do strony
          <span style={{ color: '#00e11e' }}> {voucher.shopName}</span>
        </a>
      </h4>
    </ShowVoucherWrapper>
  )
}

export default PopupCopiedCode
