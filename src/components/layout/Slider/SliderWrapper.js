import styled from 'styled-components'

const SliderWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-top: 50px;
  padding-left: 20px;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`
export default SliderWrapper
