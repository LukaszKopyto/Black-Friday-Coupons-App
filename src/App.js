import React, { Component } from 'react'
import logo from './logo.svg'
import { colors } from './utils/colors'

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
    return (
      <div
        style={{
          background: colors.headerColor,
          widht: '100vw',
          margin: 0,
          padding: 0,
        }}
      >
        <header>
          <img src={logo} alt='logo' />
          <p>Hello</p>
        </header>
      </div>
    )
  }
}

export default App
