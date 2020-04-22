import styled from 'styled-components'

export const Hamburger = styled.button`
  width: 19px;
  height: 12px;
  border: 0;
  border-top: ${({ theme }) => `2px solid ${theme.colors.textColor}`};
  background: transparent;
  position: relative;
  transition: 0.3s transform linear;
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
    transform: translateY(8px);
    transition: 0.3s transform linear;
  }
  :hover {
    transform: rotate(45deg) translateY(5px);
    border: none;
    &::after {
      transform: rotate(-90deg) translateX(-3px);
    }
  }
`
