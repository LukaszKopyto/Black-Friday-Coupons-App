import styled from 'styled-components'

const TitleWrapper = styled.h1`
  color: ${({ theme }) => theme.colors.bgColor};
  text-transform: ${(props) => (props.h2 ? 'none' : 'uppercase')};
  text-align: center;
  font-size: ${(props) => (props.h2 ? '18px' : '36px')};
  font-weight: ${(props) => (props.h2 ? '300' : '800')};
  margin: ${(props) => (props.h2 ? '0' : '24px 0 11px 0')};
  & span {
    display: block;
  }

  @media ${({ theme }) => theme.device.md} {
    font-size: ${(props) => (props.h2 ? '24px' : '56px')};
    margin: ${(props) => (props.h2 ? '0' : '30px 0 2px 0')};
    letter-spacing: 1px;
    & span {
      display: inline;
    }
  }
`
export default TitleWrapper
