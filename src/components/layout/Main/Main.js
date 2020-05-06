import React, { useState, useEffect } from 'react'
import Slider from '../Slider'
import Coupon from '../Coupon'
import { MainWrapper } from './MainWrapper'
import Button from '../Button'
import SectionInfo from '../SectionInfo'
import { CouponContainer } from '../Coupon/CouponContainer'
import { promotedStores } from '../../../utils/promotedStores'
import PlaceholderCoupon from '../PlaceholderCoupon'

const API_URL = 'https://api.alerabat.com'

const Main = () => {
  const [shops, setShops] = useState([])

  let promotedShopVouchers = []

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

    const getShopVouchers = async (shopId, imageLink) => {
      const headers = await getRequestHeader(API_URL)
      const response = await fetch(
        `${API_URL}/shops/${shopId}/vouchers`,
        headers
      ).catch((error) => {
        console.error(`Błąd ${shopId}:`, error)
      })
      const data = await response.json()
      data.map((shop) => (shop.imageLink = imageLink))
      promotedShopVouchers = [...data]
      console.log(`shop ${data[0].shopName}`, data)
      return promotedShopVouchers
    }

    const findShop = (shopName) => {
      getShops().then((data) => {
        const shop = data.find((shop) => shop.name === shopName)
        console.log(shop)
      })
    }

    const getPromotedShops = async () => {
      return Promise.all(
        promotedStores.map((shop) => getShopVouchers(shop.id, shop.imageLink))
      )
    }
    getPromotedShops().then((response) => setShops(response))
  }, [])

  const CouponList = shops.map((shop) => (
    <Coupon key={shop.id} voucher={shop[0]} img={shop[0].imageLink} />
  ))

  return (
    <MainWrapper>
      <Slider />
      <CouponContainer>
        {/* {CouponList} */}
        {console.log(shops)}
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
