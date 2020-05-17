import styled from 'styled-components'

export const ShowVoucherWrapper = styled.div`
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? 'column' : 'unset')};
  align-items: center;
  background: #dbf2df;
  border: 1px solid #00e11e;
  border-radius: 6px;
  padding: 9px 17px;
  margin-top: ${({ mobile }) => (mobile ? '20px' : 'unset')};
  color: ${({ theme }) => theme.colors.textColor};
  text-align: left;
  justify-content: space-around;
  & h4 {
    font-size: ${({ mobile }) => (mobile ? '.8rem' : '1.25rem')};
    margin: ${({ mobile }) => (mobile ? '10px 0 0' : '26px 0')};
    & a {
      color: ${({ theme }) => theme.colors.textColor};
    }
  }
  & p {
    font-size: ${({ mobile }) => (mobile ? '.8rem' : '1rem')};
    line-height: ${({ mobile }) => (mobile ? 'unset' : '1.25')};
    margin: 5px 0;
  }
`
