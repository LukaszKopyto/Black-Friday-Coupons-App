import styled from 'styled-components'

const SliderWrapper = styled.ul`
  width: 100vw;
  display: flex;
  flex-wrap: nowrap;
  flex: 0 0 auto;
  overflow-x: auto;
  margin: 50px 0 33px;
  padding-left: 20px;
  list-style: none;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`
export default SliderWrapper
