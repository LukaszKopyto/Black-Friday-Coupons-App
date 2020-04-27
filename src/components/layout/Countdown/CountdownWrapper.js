import styled from 'styled-components'

const CountdownWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;

  @media ${({ theme }) => theme.device.md} {
    width: 400px;
  }
`
export default CountdownWrapper
