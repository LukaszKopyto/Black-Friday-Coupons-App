import styled from 'styled-components'

export const Anchor = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textColor};
  &:hover {
    font-weight: 600;
  }
`
