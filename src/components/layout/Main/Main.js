import React, { useState, useEffect } from 'react'
import Slider from '../Slider'
import Coupon from '../Coupon'
import { MainWrapper } from './MainWrapper'
import Button from '../Button'
import SectionInfo from '../SectionInfo'
import { CouponContainer } from '../Coupon/CouponContainer'

const API_URL = 'https://api.alerabat.com'

const Main = () => {
  const [shop, setShop] = useState([])

  useEffect(() => {
    const form = new FormData()
    form.append('_username', process.env.REACT_APP_USERNAME)
    form.append('_password', process.env.REACT_APP_PASSWORD)

    const getRequestHeader = async (url) => {
      try {
        let response = await fetch(`${url}/login_check`, {
          method: 'POST',
          body: form,
        })
        if (await response.ok) {
          let data = await response.json()
          let token = await data.token
          let requestHeader = {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
          return requestHeader
        } else {
          throw new Error('Błąd sieci!')
        }
      } catch (error) {
        console.error('Błąd: ', error)
      }
    }

    const getShops = async () => {
      const headers = await getRequestHeader(API_URL)
      const response = await fetch(`${API_URL}/shops`, headers)
      const data = await response.json()
      console.log('getShops: ', data)
      return data
    }

    const getShopVouchers = async (shopId) => {
      const headers = await getRequestHeader(API_URL)
      const response = await fetch(
        `${API_URL}/shops/${shopId}/vouchers`,
        headers
      )
      const data = await response.json()
      setShop(data)
      console.log('getShopVouchers: ', data)
    }

    const findShop = (shopName) => {
      getShops().then((data) => {
        const shop = data.find((shop) => shop.name === shopName)
        console.log(shop)
      })
    }
    findShop('Sephora')

    getShops()
    getShopVouchers(2766)
  }, [])

  return (
    <MainWrapper>
      <Slider />
      <CouponContainer>
        <Coupon voucher={shop[0]} />
        <Coupon voucher={shop[0]} />
      </CouponContainer>
      <Button ghostBtn textColor>
        Pokaż więcej kuponów
      </Button>
      <SectionInfo />
    </MainWrapper>
  )
}

export default Main
