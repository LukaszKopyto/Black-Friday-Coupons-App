import styled from 'styled-components'

export const IconWrapper = styled.span`
  color: ${({ theme }) => theme.colors.textColor};
  & span:first-child {
    fill: rgba(0, 0, 0, 0.1);
    position: relative;
    top: 2px;
    height: 14px;
    display: inline-block;
    margin-right: 7px;
  }
  & span:nth-child(2) {
    margin: 7px;
  }
`
