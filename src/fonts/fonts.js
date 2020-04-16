import { createGlobalStyle } from 'styled-components'

import OpenSansExtraBold from './openSans800.woff2'
import OpenSansBold from './openSans600.woff2'
import OpenSansRegular from './openSansRegular.woff2'

export default createGlobalStyle`
    @font-face {
        font-family: 'OpenSans';
        src: local('Open Sans'),
        url(${OpenSansRegular}) format('woff2'),
        url(${OpenSansBold}) format('woff2'),
        url(${OpenSansExtraBold}) format('woff2');
    }
`
