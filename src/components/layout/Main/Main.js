import React, { useState, useEffect } from 'react'
import { getVouchers } from '../../../utils/api'
import PlaceholderCoupon from '../PlaceholderCoupon'
import Slider from '../Slider'
import Coupon from '../Coupon'
import { MainWrapper } from './MainWrapper'
import Button from '../Button'
import SectionInfo from '../SectionInfo'
import { CouponContainer } from '../Coupon/CouponContainer'

const Main = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [shops, setShops] = useState([])
  const [voucherToShow, setVoucherToShow] = useState(2)
  const [showMoreButton, setShowMoreButton] = useState(true)

  useEffect(() => {
    getVouchers()
      .then((allVouchers) => setShops(allVouchers))
      .catch((err) => console.log(err))
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)

    checkWindowWidth(width, setVoucherToShow)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  function checkWindowWidth(width, setVoucherToShow) {
    if (width > 375 && width < 959) {
      setVoucherToShow(4)
    }
    if (width > 960 && width < 1279) {
      setVoucherToShow(6)
    }
    if (width > 1280) {
      setVoucherToShow(8)
    }
  }

  const showMoreVoucher = () => {
    const numbersOfVoucher = voucherToShow * 2

    if (numbersOfVoucher < CouponList.length) {
      setVoucherToShow(numbersOfVoucher)
    } else {
      setVoucherToShow(numbersOfVoucher)
      setShowMoreButton(!showMoreButton)
    }
  }

  const CouponList = []
  if (shops) {
    for (const shop of shops) {
      for (const voucher of shop) {
        //only static typeName coupon code
        if (!voucher.code) {
          CouponList.push(<Coupon key={voucher.id} voucher={voucher} />)
        } else if (voucher.code && voucher.code.typeName !== 'dynamic') {
          CouponList.push(<Coupon key={voucher.id} voucher={voucher} />)
        }
      }
    }
  }
  return (
    <MainWrapper>
      <Slider />
      <CouponContainer>
        {shops && shops.length ? (
          CouponList.slice(0, voucherToShow)
        ) : (
          <PlaceholderCoupon n={voucherToShow} />
        )}
      </CouponContainer>
      {showMoreButton ? (
        <Button ghostBtn textColor click={showMoreVoucher}>
          Pokaż więcej kuponów
        </Button>
      ) : null}

      <SectionInfo />
    </MainWrapper>
  )
}

export default Main
