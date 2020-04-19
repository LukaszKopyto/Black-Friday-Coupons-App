import styled from 'styled-components'

export const ButtonWrapper = styled.div`
  display: inline;
  color: ${({ theme }) => theme.colors.bgColor};
  font-size: 14px;
  line-height: 20px;
  font-weight: 300;
  padding: 9px 17px 11px;
  border: ${({ ghostBtn }) => (ghostBtn ? '1px solid #979797' : null)};
  background: ${({ theme, ghostBtn }) =>
    ghostBtn
      ? 'transparent'
      : `linear-gradient(260deg, ${theme.colors.second}, ${theme.colors.main} )`};
  border-radius: 6px;
  text-transform: ${({ ghostBtn }) => (ghostBtn ? null : 'uppercase')};
  text-align: center;
  margin-top: ${({ ghostBtn }) => (ghostBtn ? null : '19px')};
  cursor: pointer;
`
