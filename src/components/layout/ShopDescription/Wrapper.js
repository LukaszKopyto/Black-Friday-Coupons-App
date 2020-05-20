import styled from 'styled-components'

export const Wrapper = styled.section`
  padding: 0 30px;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.62;
  color: ${({ theme }) => theme.colors.textColor};
  width: 100%;
  & h2 {
    font-size: 24px;
    font-weight: 600;
  }
  & picture {
    display: flex;
    justify-content: center;
    & img {
      width: 100%;
      height: 100%;
    }
  }

  @media ${({ theme }) => theme.device.xl} {
    width: calc(100% - 340px);
  }
`
