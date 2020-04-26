import styled from 'styled-components'

export const SecondMenu = styled.ul`
  height: 90px;
  list-style: none;
  border-top: ${({ theme }) => `1px solid ${theme.colors.border}`};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.border}`};
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: auto;
  padding-left: 0px;
  & li {
    flex-shrink: 0;
    margin-right: 30px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.border};
    height: 100%;
    line-height: 81px;
    width: 278px;
    text-align: center;
  }
  & .active {
    color: ${({ theme }) => theme.colors.textColor};
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.textColor}`};
  }

  @media ${({ theme }) => theme.device.md} {
    & li {
      width: 50%;
      text-align: center;
      font-size: 18px;
    }
  }

  @media ${({ theme }) => theme.device.xl} {
    width: 50%;
    overflow-x: unset;
  }
  & li {
    line-height: 89px;
    margin: 0;
  }
  & .active {
    position: relative;
    top: 1px;
  }
`
