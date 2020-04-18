import React, { Component } from 'react'
import Header from './components/layout/header/Header'

const API_URL = 'https://api.alerabat.com'

class App extends Component {
  componentDidMount() {
    const form = new FormData()
    form.append('_username', process.env.REACT_APP_USERNAME)
    form.append('_password', process.env.REACT_APP_PASSWORD)

    fetch(`${API_URL}/login_check`, {
      method: 'POST',
      body: form,
    })
      .then((res) => res.json())
      .then((res) => {
        let token = res.token
        const header = {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
        return fetch(`${API_URL}/shops/2253/vouchers`, header)
      })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log('Błąd: ', err))
  }

  render() {
    return <Header />
  }
}

export default App
