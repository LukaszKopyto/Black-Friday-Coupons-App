import styled from 'styled-components'

const SliderItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  margin-right: 10px;
  background: ${(props) => (props.bg ? props.bg : 'white')};
  border-radius: 6px;
  width: 100px;
  height: 46px;
  cursor: pointer;
  & img {
    max-height: 32px;
    max-width: 70px;
  }
`
export default SliderItem
