import styled from 'styled-components'

export const ArticleTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textColor};
  margin: 0 auto 28px;

  @media ${({ theme }) => theme.device.md} {
    margin: 0 auto 19px;
  }
`
