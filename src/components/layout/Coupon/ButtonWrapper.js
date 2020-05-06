import styled from 'styled-components'

export const ButtonWrapper = styled.button`
  display: inline;
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
  margin-top: 19px;
  cursor: pointer;
  bottom: 20px;
  position: absolute;
  width: calc(100% - 40px);

  @media ${({ theme }) => theme.device.md} {
    margin: ${({ margin }) => (margin ? margin : null)};
  }
`
