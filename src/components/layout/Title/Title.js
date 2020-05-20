import React from 'react'
import TitleWrapper from './TitleWrapper'

const Title = ({ children, as, title }) => {
  return (
    <>
      <TitleWrapper as={as} title={title}>
        {children}
      </TitleWrapper>
    </>
  )
}

export default Title
