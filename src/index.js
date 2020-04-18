import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createGlobalStyle } from 'styled-components'
import GlobalFonts from './utils/fonts/fonts'

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
    <GlobalStyle />
    <GlobalFonts />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
