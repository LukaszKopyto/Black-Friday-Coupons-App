import styled from 'styled-components'

const SliderWrapper = styled.ul`
  width: 100vw;
  display: flex;
  flex-wrap: nowrap;
  flex: 0 0 auto;
  overflow-x: auto;
  margin: 50px 0 33px;
  padding-left: 30px;
  list-style: none;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${({ theme }) => theme.device.md} {
    margin-top: 44px;
  }

  @media ${({ theme }) => theme.device.xl} {
    width: calc(8 * 110px);
    padding-left: 0;
  }
`
export default SliderWrapper
