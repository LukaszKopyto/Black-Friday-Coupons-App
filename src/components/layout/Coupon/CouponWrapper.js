import styled from 'styled-components'

export const CouponWrapper = styled.section`
  width: 306px;
  height: 327px;
  border-radius: 6px;
  box-shadow: 0 5px 8px 0 rgba(82, 73, 98, 0.2);
  background-color: ${({ theme }) => theme.colors.couponBg};
  margin: 20px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
`
