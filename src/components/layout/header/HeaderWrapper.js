import styled from 'styled-components'
import bgImage from '../../../images/bg1440.jpg'

const HeaderWrapper = styled.header`
  width: 100vw;
  height: 880px;
  background: ${({ theme }) =>
    `url(${bgImage}) ${theme.colors.headerColor} top center no-repeat`};
  background-size: cover;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default HeaderWrapper
