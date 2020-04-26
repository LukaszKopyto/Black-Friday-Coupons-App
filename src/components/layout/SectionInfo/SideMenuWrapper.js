import styled from 'styled-components'

export const SideMenuWrapper = styled.nav`
  display: flex;
  width: 340px;
  background: ${({ theme }) => theme.colors.sideMenuBg};
  position: absolute;
  transform: translateX(-100%);
  & ul {
    list-style: none;
    margin-top: 40px;
    padding: 0 15px 0 50px;
  }
  & li {
    margin-bottom: 20px;
  }

  @media ${({ theme }) => theme.device.xl} {
    position: relative;
    transform: translateX(0%);
  }
`
