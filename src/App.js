import React, { Component } from 'react'
import Header from './components/layout/Header'

const API_URL = 'https://api.alerabat.com'

class App extends Component {
  componentDidMount() {
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
    }

    const getShopVouchers = async (shopId) => {
      const headers = await getRequestHeader(API_URL)
      const response = await fetch(
        `${API_URL}/shops/${shopId}/vouchers`,
        headers
      )
      const data = await response.json()
      console.log('getShopVouchers: ', data)
    }

    getShops()
    getShopVouchers(2253)
  }

  render() {
    return <Header />
  }
}

export default App
