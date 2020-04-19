import styled from 'styled-components'

export const ButtonWrapper = styled.div`
  display: inline;
  color: ${({ theme }) => theme.colors.bgColor};
  font-size: 14px;
  line-height: 20px;
  font-weight: 300;
  padding: 9px 17px 11px;
  border: 1px solid #979797;
  border-radius: 6px;
  margin-top: 23px;
  cursor: pointer;
`
