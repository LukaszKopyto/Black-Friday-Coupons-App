import styled from 'styled-components'

const SliderWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: nowrap;
  flex: 0 0 auto;
  overflow-x: auto;
  margin: 50px 0 43px;
  padding-left: 20px;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`
export default SliderWrapper
