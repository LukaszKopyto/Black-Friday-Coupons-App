import React from 'react'
import Button from './Button'
import { CodeInfoWrapper } from './CodeInfoWrapper'
import { ShowCode } from './ShowCode'
import { LinkWrapper } from './LinkWrapper'

function ShowVoucher({ voucher, showVoucher, handleAmountOfUse }) {
  const btnCoupon = (
    <CodeInfoWrapper>
      <a
        href={voucher.directLink}
        target='_blank'
        rel='noopener noreferrer'
        style={{ width: '100%' }}
      >
        <Button click={handleAmountOfUse}>
          {voucher.offerTypeName === 'discount code'
            ? 'Pokaż kod'
            : 'Przejdź do promocji'}
        </Button>
      </a>
    </CodeInfoWrapper>
  )

  const codeInfo = (
    <CodeInfoWrapper>
      <ShowCode>{voucher.code !== null && voucher.code.codeValue}</ShowCode>
      <LinkWrapper>
        <a href={voucher.directLink} style={{ color: 'red' }}>
          Przejdź do oferty
        </a>
      </LinkWrapper>
    </CodeInfoWrapper>
  )

  if (voucher.offerTypeName === 'discount code' && showVoucher) {
    return codeInfo
  } else {
    return btnCoupon
  }
}

export default ShowVoucher
