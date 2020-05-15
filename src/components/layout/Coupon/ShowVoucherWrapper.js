import styled from 'styled-components'

export const ShowVoucherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #dbf2df;
  border: 1px solid #00e11e;
  border-radius: 6px;
  padding: 9px 17px;
  color: ${({ theme }) => theme.colors.textColor};
  text-align: left;
  & h4 {
    font-size: 1.25rem;
    margin-bottom: 0;
  }
  & p {
    font-size: 1rem;
    line-height: 1.25;
    margin: 5px 0;
  }
`
