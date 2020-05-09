import React, { useState, useEffect } from 'react'
import axios from 'axios'
import api, { API_URL } from '../../../utils/api'
import PlaceholderCoupon from '../PlaceholderCoupon'
import Slider from '../Slider'
import Coupon from '../Coupon'
import { MainWrapper } from './MainWrapper'
import Button from '../Button'
import SectionInfo from '../SectionInfo'
import { CouponContainer } from '../Coupon/CouponContainer'

axios.defaults.baseURL = API_URL

const Main = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [shops, setShops] = useState([])
  const [voucherToShow, setVoucherToShow] = useState(2)
  const [showMoreButton, setShowMoreButton] = useState(true)

  const fetchData = () => {
    api
      .getAuthToken()
      .then((headers) => api.getShopsId(headers))
      .then(({ data: { data, headers } }) => {
        axios
          .all(data.map((link) => axios.get(link, { headers })))
          .then((res) => {
            const shopVouchers = res.map((item) => item.data)
            setShops(shopVouchers)
          })
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message)
        }
        console.log(error.config)
      })
  }

  useEffect(() => {
    fetchData()
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

  // const CouponList = shops
  //   .slice(0, voucherToShow)
  //   .map((shop) => <Coupon key={shop[0].id} voucher={shop[0]} />)

  const CouponList = []

  for (const i of shops) {
    for (const j of i) {
      CouponList.push(<Coupon key={j.id} voucher={j} />)
    }
  }

  return (
    <MainWrapper>
      <Slider />
      <CouponContainer>
        {shops.length ? (
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
