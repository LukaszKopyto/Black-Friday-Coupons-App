import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './Auth'
import PrivateRoute from './PrivateRoute'
import App from './App'
import Login from './Login'
import Shopsite from './components/views/Shopsite'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import GlobalFonts from './utils/fonts/fonts'
import { theme } from './utils/theme'
import Info from './components/views/Info/Info'

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
            <Switch>
              <PrivateRoute exact path='/' component={App} />
              <Route path='/login' component={Login} />
              <Route exact path='/:shopName' component={Shopsite} />
              <Route path='/article/:articleTitle' component={Info} />
            </Switch>
          </Router>
        </AuthProvider>
      </>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
