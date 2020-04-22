import styled from 'styled-components'

export const ButtonWrapper = styled.button`
  display: inline;
  color: ${({ theme, textColor }) =>
    textColor ? theme.colors.textColor : theme.colors.bgColor};
  font-size: 14px;
  line-height: 20px;
  font-weight: 300;
  padding: 9px 17px 11px;
  border: ${({ ghostBtn, theme }) =>
    ghostBtn ? `1px solid ${theme.colors.border}` : 0};
  background: ${({ theme, ghostBtn }) =>
    ghostBtn
      ? 'transparent'
      : `linear-gradient(260deg, ${theme.colors.second}, ${theme.colors.main} )`};
  border-radius: 6px;
  text-transform: ${({ ghostBtn }) => (ghostBtn ? null : 'uppercase')};
  text-align: center;
  margin-top: ${({ ghostBtn }) => (ghostBtn ? null : '19px')};
  margin: ${({ margin }) => (margin ? '30px 40px' : null)};
  cursor: pointer;
`
