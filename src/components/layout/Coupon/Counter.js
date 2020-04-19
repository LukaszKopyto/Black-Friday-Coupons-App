import styled from 'styled-components'

export const Counter = styled.div`
  border: 1px solid rgba(82, 73, 98, 0.12);
  border-radius: 4px;
  margin-top: 15px;
  font-size: 12px;
  padding: 12px;
  width: 71px;
  & span:nth-child(1) {
    fill: rgba(0, 0, 0, 0.1);
    position: relative;
    top: 3px;
    height: 14px;
    display: inline-block;
    margin-right: 7px;
  }
  & span:nth-child(2) {
    color: ${({ theme }) => theme.colors.textColor};
    opacity: 0.8;
  }
`
