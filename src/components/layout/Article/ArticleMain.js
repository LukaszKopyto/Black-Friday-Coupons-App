import styled from 'styled-components'

export const ArticleMain = styled.main`
  color: ${({ theme }) => theme.colors.textColor};
  line-height: 26px;
  font-size: 16px;
  & p {
    margin-bottom: 26px;
  }
`
