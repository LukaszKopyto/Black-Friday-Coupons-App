import React, { useState, useEffect } from 'react'
import axios from 'axios'
import api from '../../../utils/api'
import Slider from '../Slider'
import Coupon from '../Coupon'
import { MainWrapper } from './MainWrapper'
import Button from '../Button'
import SectionInfo from '../SectionInfo'
import { CouponContainer } from '../Coupon/CouponContainer'
import PlaceholderCoupon from '../PlaceholderCoupon'

axios.defaults.baseURL = 'https://api.alerabat.com'

const Main = () => {
  const [shops, setShops] = useState([])
  const [voucherNum, setVoucherNum] = useState(2)

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
    if (window.matchMedia('max-width: 376px')) {
      setVoucherNum(2)
    } else {
      setVoucherNum(4)
    }
  }, [])

  const CouponList = shops
    .map((shop) => <Coupon key={shop[0].id} voucher={shop[0]} />)
    .slice(0, voucherNum)
  console.log(CouponList)

  return (
    <MainWrapper>
      <Slider />
      <CouponContainer>
        {shops.length ? CouponList : <PlaceholderCoupon />}
      </CouponContainer>
      <Button ghostBtn textColor>
        Pokaż więcej kuponów
      </Button>
      <SectionInfo />
    </MainWrapper>
  )
}

export default Main
