import styled from 'styled-components'

export const ShowCodeButton = styled.button`
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme, bg }) =>
    bg ? theme.colors.bgColor : theme.colors.textColor};
  background: ${({ theme, bg }) => (bg ? bg : theme.colors.bgColor)};
  border-radius: 1.25rem;
  border: 0;
  width: ${({ bg }) => (bg ? 'unset' : '38%')};
  padding: 9px 17px;
  box-shadow: 0 11px 22px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
`
