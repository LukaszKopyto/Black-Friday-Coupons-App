import styled from 'styled-components'

export const ButtonWrapper = styled.button`
  display: inline-flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.bgColor};
  font-size: 14px;
  line-height: 20px;
  font-weight: 300;
  padding: 9px 17px 9px;
  border: 0;
  background: ${({ theme }) =>
    `linear-gradient(260deg, ${theme.colors.second}, ${theme.colors.main} )`};
  border-radius: 6px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  width: 100%;

  @media ${({ theme }) => theme.device.md} {
    margin: ${({ margin }) => (margin ? margin : null)};
  }
`
