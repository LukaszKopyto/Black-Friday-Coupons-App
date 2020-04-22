import styled from 'styled-components'

export const FirstMenu = styled.div`
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  border-top: ${({ theme }) => `1px solid ${theme.colors.border}`};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.border}`};
  color: ${({ theme }) => theme.colors.textColor};
`
