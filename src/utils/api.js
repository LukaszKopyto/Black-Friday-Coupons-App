import axios from 'axios'
import { promotedStores } from './promotedStores'

const form = new FormData()
form.append('_username', process.env.REACT_APP_USERNAME)
form.append('_password', process.env.REACT_APP_PASSWORD)

const axiosInstance = axios.create({
  baseURL: 'https://api.alerabat.com',
  timeout: 5000,
})

export default {
  getAuthToken: () =>
    axiosInstance.post('/login_check', form).then(({ data: { token } }) => {
      return {
        Authorization: `Bearer ${token}`,
      }
    }),
  getShopsId: (headers) =>
    axiosInstance.get('/shops', {
      headers,
      transformResponse: [
        function (data) {
          const json = JSON.parse(data)
          data = Array.from(json)
            .filter(({ name }) => {
              return promotedStores.map((shop) => shop.shopName).includes(name)
            })
            .map((shop) => `/shops/${shop.id}/vouchers`)
          return { data, headers }
        },
      ],
    }),
  getShopVouchers: (link) => {
    axiosInstance.get(link)
  },
}
