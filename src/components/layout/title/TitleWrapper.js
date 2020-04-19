import styled from 'styled-components'
import { colors } from '../../../utils/colors'

const TitleWrapper = styled.h1`
  color: ${colors.bgColor};
  text-transform: ${(props) => (props.h2 ? 'none' : 'uppercase')};
  text-align: center;
  font-size: ${(props) => (props.h2 ? '18px' : '36px')};
  font-weight: ${(props) => (props.h2 ? '300' : '800')};
  margin: ${(props) => (props.h2 ? '0' : '24px 0 11px 0')};
  & span {
    display: block;
  }
`
export default TitleWrapper
