import React from 'react'
import TitleWrapper from './TitleWrapper'

const Title = (props) => {
  return (
    <>
      <TitleWrapper as={props.as} h2={props.h2}>
        {props.children}
      </TitleWrapper>
    </>
  )
}

export default Title
