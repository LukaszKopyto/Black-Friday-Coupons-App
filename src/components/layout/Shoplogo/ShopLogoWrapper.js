import styled from 'styled-components'

const ShopLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  background: ${(props) => (props.bg ? props.bg : 'white')};
  border-radius: 6px;
  width: 105px;
  height: 105px;
  padding: 14px;
  margin-right: 16px;
`
export default ShopLogoWrapper
