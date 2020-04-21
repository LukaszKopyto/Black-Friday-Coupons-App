import styled from 'styled-components'
import bgImage from '../../../images/bg1440.jpg'

const HeaderWrapper = styled.header`
  width: 100vw;
  background: ${({ theme }) =>
    `url(${bgImage}) ${theme.colors.headerColor} top center no-repeat`};
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 880px;
`

export default HeaderWrapper
