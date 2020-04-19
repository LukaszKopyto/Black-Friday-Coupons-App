import styled from 'styled-components'

export const CouponWrapper = styled.div`
  width: 300px;
  height: 320px;
  border-radius: 6px;
  box-shadow: 0 5px 8px 0 rgba(82, 73, 98, 0.2);
  background-color: ${({ theme }) => theme.colors.couponBg};
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`
