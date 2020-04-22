import styled from 'styled-components'

export const SecondMenu = styled.ul`
  height: 90px;
  list-style: none;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.border}`};
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: auto;
  padding-left: 30px;
  & li {
    flex-shrink: 0;
    margin-right: 30px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textColor};
  }
`
