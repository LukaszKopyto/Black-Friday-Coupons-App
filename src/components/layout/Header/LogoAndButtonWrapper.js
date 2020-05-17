import styled from 'styled-components'

export const LogoAndButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  @media ${({ theme }) => theme.device.md} {
    flex-direction: row;
    width: 100vw;
    justify-content: space-between;
    padding: 0 63px;
  }

  @media ${({ theme }) => theme.device.xl} {
    padding: 0 50px;
  }
`
