import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProvider } from './Auth'
import PrivateRoute from './PrivateRoute'
import App from './App'
import Login from './Login'
import SignUp from './SignUp'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import GlobalFonts from './utils/fonts/fonts'
import { theme } from './utils/theme'

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0px;
    margin: 0px;
    font-family: 'Open Sans';
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <>
        <AuthProvider>
          <Router>
            <GlobalStyle />
            <GlobalFonts />
            <PrivateRoute exact path='/' component={App} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
          </Router>
        </AuthProvider>
      </>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
