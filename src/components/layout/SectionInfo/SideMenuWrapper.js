import styled from 'styled-components'

export const SideMenuWrapper = styled.nav`
  display: flex;
  width: 340px;
  min-height: 100%;
  background: ${({ theme }) => theme.colors.sideMenuBg};
  position: absolute;
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(-100%)')};
  transition: 0.3s transform cubic-bezier(0.6, -0.28, 0.74, 0.05);
  & ul {
    list-style: none;
    margin-top: 40px;
    padding: 0 15px 0 50px;
  }
  & li {
    margin-bottom: 20px;
  }
  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textColor};
    &.active {
      font-weight: 600;
    }
    &:hover {
      font-weight: 600;
    }
  }

  @media ${({ theme }) => theme.device.xl} {
    position: relative;
    transform: translateX(0%);
    min-width: 340px;
  }
`
