import styled from 'styled-components'

export const HamburgerWrapper = styled.button`
  width: 19px;
  height: 12px;
  margin-right: 30px;
  border: 0;
  border-top: ${({ theme }) => `2px solid ${theme.colors.textColor}`};
  background: transparent;
  position: relative;
  border: ${({ open }) => (open ? 'none' : null)};
  transform: ${({ open }) => (open ? 'rotate(45deg) translateY(5px)' : null)};
  transition: 0.3s transform linear;
  cursor: pointer;
  &::before,
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-top: ${({ theme }) => `2px solid ${theme.colors.textColor}`};
    transform: translateY(3px);
  }
  &::after {
    transform: ${({ open }) =>
      open ? 'rotate(-90deg) translateX(-3px)' : 'translateY(8px)'};
    transition: 0.3s transform linear;
  }
  /* :hover {
    transform: rotate(45deg) translateY(5px);
    border: none;
    &::after {
      transform: rotate(-90deg) translateX(-3px);
    }
  } */

  @media ${({ theme }) => theme.device.md} {
    margin-right: 35px;
  }

  @media ${({ theme }) => theme.device.xl} {
    display: none;
  }
`
