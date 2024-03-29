import styled from 'styled-components'

export const CounterWrapper = styled.div`
  border: 1px solid rgba(82, 73, 98, 0.12);
  border-radius: 4px;
  margin-top: 18px;
  font-size: 12px;
  padding: 10px;
  width: 78px;
  & span:nth-child(1) {
    fill: ${({ theme, heartColor }) =>
      heartColor ? theme.colors.second : 'rgba(0, 0, 0, 0.1)'};
    position: relative;
    top: 3px;
    height: 14px;
    display: inline-block;
    margin-right: 7px;
    &:hover {
      fill: ${({ theme }) => theme.colors.second};
    }
  }
  & span:nth-child(2) {
    color: ${({ theme }) => theme.colors.textColor};
    opacity: 0.8;
  }
`
