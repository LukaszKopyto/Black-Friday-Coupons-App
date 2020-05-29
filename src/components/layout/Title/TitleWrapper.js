import styled from 'styled-components'

const handleTitleMobile = (title) => {
  switch (title) {
    case 'small':
      return 'font-size: 14px; margin-right: 20px; text-transform: uppercase;'
    case 'medium':
      return 'font-size: 18px; font-weight: 300;'
    default:
      return 'font-size: 36px; font-weight: 800; margin: 24px 0 11px 0; text-transform: uppercase;'
  }
}

const handleTitleTablet = (title) => {
  switch (title) {
    case 'small':
      return 'font-size: 24px; margin-right: 30px;'
    case 'medium':
      return 'font-size: 24px;'
    default:
      return 'font-size: 56px; margin: 30px 0 2px 0'
  }
}

const handleTitleDesktop = (title) => {
  switch (title) {
    case 'small':
      return 'justify-content: center; width: 100vw; display: flex; position: absolute;'
    default:
      return ''
  }
}

const TitleWrapper = styled.h1`
  color: ${({ theme }) => theme.colors.bgColor};
  text-align: center;
  letter-spacing: 1px;
  ${({ title }) => handleTitleMobile(title)};
  & span {
    display: block;
  }

  @media ${({ theme }) => theme.device.md} {
    ${({ title }) => handleTitleTablet(title)}
    & span {
      display: inline;
    }
  }
  @media ${({ theme }) => theme.device.xl} {
    ${({ title }) => handleTitleDesktop(title)}
  }
`
export default TitleWrapper
