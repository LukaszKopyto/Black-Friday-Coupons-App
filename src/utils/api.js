import axios from 'axios'
import { promotedStores } from './promotedStores'

const API_URL = 'https://api.alerabat.com'

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
})

const getToken = () => {
  const form = new FormData()
  form.append('_username', process.env.REACT_APP_USERNAME)
  form.append('_password', process.env.REACT_APP_PASSWORD)
  return new Promise((resolve, reject) => {
    axiosInstance
      .post('/login_check', form)
      .then(async (response) => {
        resolve(response.data.token)
        // let token = response.data.token
        // let tokenLastRefresh = new Date().getTime()
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export const getVouchers = async () => {
  let token = await getToken()

  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  axiosInstance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error.response.status === 401) {
        return getVouchers()
      }
    }
  )
  return axiosInstance
    .get('/shops', {
      transformResponse: [
        function (data) {
          const json = JSON.parse(data)
          data = Array.from(json)
            .filter(({ name }) => {
              return promotedStores.map((shop) => shop.shopName).includes(name)
            })
            .map((shop) => `/shops/${shop.id}/vouchers`)
          return data
        },
      ],
    })
    .then(({ data }) => {
      const allVouchers = axios
        .all(data.map((link) => axiosInstance.get(link)))
        .then((res) => {
          return res.map((item) => item.data)
        })
      return allVouchers
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
