import styled from 'styled-components'

export const NavWrapper = styled.nav`
  @media ${({ theme }) => theme.device.xl} {
    display: flex;
    width: 100vw;
    flex-direction: row;
  }
`
