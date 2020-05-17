import React from 'react'
import Button from './Button'
import { CodeInfoWrapper } from './CodeInfoWrapper'
import { ShowCodeButton } from './ShowCodeButton'
import { LinkWrapper } from './LinkWrapper'
import PopupCoupon from './Popup'
import PopupShowCode from './PopupShowCode'
import PopupCopiedCode from './PopupCopiedCode'

const ShowVoucherCode = ({
  voucher,
  showVoucher,
  handleAmountOfUse,
  like,
  heartColor,
  amountOfUse,
  copied,
  copy,
}) => {
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
      <ShowCodeButton width={'90%'}>
        {voucher.code !== null && voucher.code.codeValue}
      </ShowCodeButton>
      <LinkWrapper>
        <a href={voucher.directLink} style={{ color: 'red' }}>
          Przejdź do oferty
        </a>
      </LinkWrapper>
      <PopupCoupon
        voucher={voucher}
        couponLike={like}
        couponLikeColor={heartColor}
        amountOfUse={amountOfUse}
        copied={copied}
        copy={copy}
      />
    </CodeInfoWrapper>
  )
  let mobileCodeInfo
  if (copied) {
    mobileCodeInfo = <PopupCopiedCode voucher={voucher} mobile={true} />
  } else {
    mobileCodeInfo = (
      <PopupShowCode voucher={voucher} mobile={true} copy={copy} />
    )
  }

  if (
    voucher.offerTypeName === 'discount code' &&
    showVoucher &&
    window.innerWidth > 653
  ) {
    return codeInfo
  } else if (
    voucher.offerTypeName === 'discount code' &&
    showVoucher &&
    window.innerWidth < 653
  ) {
    return mobileCodeInfo
  } else {
    return btnCoupon
  }
}

export default ShowVoucherCode
