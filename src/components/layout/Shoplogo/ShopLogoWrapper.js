import styled from 'styled-components'

const ShopLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  background: ${(props) => (props.bg ? props.bg : 'white')};
  border-radius: 6px;
  width: 111px;
  height: 111px;
  padding: 14px;
  margin-right: 16px;

  @media ${({ theme }) => theme.device.md} {
    width: 105px;
    height: 105px;
  }
`
export default ShopLogoWrapper
