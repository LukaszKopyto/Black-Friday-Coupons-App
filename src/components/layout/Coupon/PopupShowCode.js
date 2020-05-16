import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { ShowCodeButton } from './ShowCodeButton'
import { ShowVoucherWrapper } from './ShowVoucherWrapper'

const PopupShowCode = ({ voucher, copy, mobile }) => {
  return (
    <ShowVoucherWrapper mobile={mobile}>
      <CopyToClipboard text={voucher.code.codeValue} onCopy={copy}>
        <ShowCodeButton>
          {voucher.code !== null && voucher.code.codeValue}
        </ShowCodeButton>
      </CopyToClipboard>
      <div
        style={{
          paddingLeft: '20px',
        }}
      >
        <h4>Kliknij w kod, aby skopiować</h4>
        <p>
          następnie wklej kod w koszyku zamówienia na stronie {voucher.shopName}
        </p>
      </div>
    </ShowVoucherWrapper>
  )
}

export default PopupShowCode
