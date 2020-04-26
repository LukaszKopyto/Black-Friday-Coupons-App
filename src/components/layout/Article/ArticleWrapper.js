import styled from 'styled-components'

export const ArticleWrapper = styled.article`
  padding: 30px;
  flex: 1;

  @media ${({ theme }) => theme.device.xl} {
    padding: 30px 50px;
  }
`
