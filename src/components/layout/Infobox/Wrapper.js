import styled from 'styled-components'

export const Wrapper = styled.section`
  min-width: 314px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin: 14px;
  padding: 15px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textColor};
  flex: 1;
`
