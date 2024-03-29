import styled from 'styled-components'
import bgImage from '../../../images/bg1440.jpg'

const HeaderWrapper = styled.header`
  width: 100vw;
  background: ${({ theme }) =>
    `url(${bgImage}) ${theme.colors.headerColor} top center no-repeat`};
  background-size: cover;
  display: flex;
  flex-direction: ${({ small }) => (small ? 'row' : 'column')};
  align-items: center;
  justify-content: ${({ small }) => (small ? 'space-between' : 'unset')};
  height: ${({ small }) => (small ? '71px' : '880px')};

  @media ${({ theme }) => theme.device.xl} {
    height: ${({ small }) => small && '150px'};
  }
`

export default HeaderWrapper
