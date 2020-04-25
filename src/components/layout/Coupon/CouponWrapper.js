import styled from 'styled-components'

export const CouponWrapper = styled.section`
  width: 307px;
  height: 326px;
  border-radius: 6px;
  box-shadow: 0 5px 8px 0 rgba(82, 73, 98, 0.2);
  background-color: ${({ theme }) => theme.colors.couponBg};
  margin: 10px 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.device.md} {
    width: 300px;
    height: 318px;
  }
`
