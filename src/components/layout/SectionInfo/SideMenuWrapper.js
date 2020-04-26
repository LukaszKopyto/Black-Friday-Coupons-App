import styled from 'styled-components'

export const SideMenuWrapper = styled.nav`
  display: none;

  @media ${({ theme }) => theme.device.xl} {
    display: flex;
    width: 340px;
    background: ${({ theme }) => theme.colors.sideMenuBg};
    & ul {
      list-style: none;
      margin-top: 40px;
      padding: 0 15px 0 50px;
    }
    & li {
      margin-bottom: 20px;
    }
  }
`
