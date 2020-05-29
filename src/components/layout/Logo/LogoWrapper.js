import styled from 'styled-components'

export const LogoWrapper = styled.div`
  & img {
    margin: ${({ small }) => (small ? '0 20px' : '50px auto 23px')};
    width: ${({ small }) => (small ? '140px' : '213px')};
    display: block;

    @media ${({ theme }) => theme.device.md} {
      width: 213px;
      margin: ${({ small }) => (small ? '0 30px' : '50px auto 23px')};
    }

    @media ${({ theme }) => theme.device.xl} {
      width: 213px;
      margin: ${({ small }) => (small ? '0 50px' : '50px auto 23px')};
    }
  }
`
