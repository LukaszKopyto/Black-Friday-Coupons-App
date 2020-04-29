import styled, { keyframes } from 'styled-components'

const shineLines = keyframes`
  0% {
    background-position: -300px;
  }

  100% {
    background-position: 350px;
  }
`

export const PlaceholderWrapper = styled.div`
  width: 307px;
  height: 326px;
  border-radius: 6px;
  box-shadow: 0 5px 8px 0 rgba(82, 73, 98, 0.2);
  background-color: ${({ theme }) => theme.colors.couponBg};
  margin: 10px 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    to right,
    #f4f3f5 0%,
    #dbdbdc,
    #f4f4f5 100%
  );
  animation: ${shineLines} 4s infinite linear;

  @media ${({ theme }) => theme.device.md} {
    width: 300px;
    height: 318px;
  }
`
