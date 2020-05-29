import styled from 'styled-components'

export const LogoAndButtonWrapper = styled.div`
  display: flex;
  flex-direction: ${({ small }) => (small ? 'row' : 'column')};
  align-items: center;
  width: ${({ small }) => (small ? 'unset' : '100vw')};
  z-index: 2;
  & a {
    display: block;
  }

  @media ${({ theme }) => theme.device.md} {
    flex-direction: row;
    justify-content: space-between;
    padding: ${({ small }) => (small ? 'unset' : '0 63px')};
  }

  @media ${({ theme }) => theme.device.xl} {
    padding: 0 50px;
  }
`
