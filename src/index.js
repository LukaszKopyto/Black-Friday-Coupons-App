import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './Auth'
import PrivateRoute from './PrivateRoute'
import App from './App'
import Login from './Login'
import Shopsite from './components/views/Shopsite'
import Facts from './components/views/Info/Facts'
import Trends from './components/views/Info/Trends'
import Spending from './components/views/Info/Spending'
import Pieces from './components/views/Info/Pieces'
import Qa from './components/views/Info/Qa'
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
            <Switch>
              <PrivateRoute exact path='/' component={App} />
              <Route path='/login' component={Login} />
              <Route exact path='/:shopName' component={Shopsite} />
              <Route
                path='/article/facts-and-numbers'
                render={() => <Facts title='Facts and Numbers' />}
              />
              <Route
                path='/article/trends-past-years'
                render={() => <Trends title='Trends in the past years' />}
              />
              <Route
                path='/article/spending'
                render={() => <Spending title='Black Friday spending' />}
              />
              <Route
                path='/article/pieces-of-black-friday-cake'
                render={() => <Pieces title='Pieces of Black Friday Cake' />}
              />
              <Route
                path='/article/frequntly-asked-questions'
                render={() => <Qa title='frequntly-asked-questions' />}
              />
            </Switch>
          </Router>
        </AuthProvider>
      </>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
