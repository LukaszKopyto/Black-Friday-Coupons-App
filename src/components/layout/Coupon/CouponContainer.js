import styled from 'styled-components'

export const CouponContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;

  @media ${({ theme }) => theme.device.md} {
    margin-bottom: 32px;
  }
`
