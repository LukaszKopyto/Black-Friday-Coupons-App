import styled from 'styled-components'

export const CouponWrapper = styled.section`
  width: 307px;
  border: 1px solid rgb(232, 232, 234);
  border-radius: 6px;
  box-shadow: 0 2px 5px 0 rgba(82, 73, 98, 0.2);
  background-color: ${({ theme }) => theme.colors.couponBg};
  margin: 10px 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  @media ${({ theme }) => theme.device.md} {
    width: 300px;
  }
`
