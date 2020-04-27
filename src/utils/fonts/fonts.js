import { createGlobalStyle } from 'styled-components'
import openSansLight from './open-sans-v17-latin-ext_latin-300.woff'
import openSansBold from './open-sans-v17-latin-ext_latin-600.woff'
import openSansExBold from './open-sans-v17-latin-ext_latin-800.woff'

export default createGlobalStyle`
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  src: local('Open Sans Light'), local('OpenSans-Light'),
       url(${openSansLight}) format('woff'); /* Modern Browsers */
}
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'),
       url(${openSansBold}) format('woff'); /* Modern Browsers */
}
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  src: local('Open Sans ExtraBold'), local('OpenSans-ExtraBold'),
       url(${openSansExBold}) format('woff'); /* Modern Browsers */
}

`
