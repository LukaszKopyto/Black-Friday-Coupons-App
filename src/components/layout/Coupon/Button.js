import React from 'react'
import { ButtonWrapper } from './ButtonWrapper'

const Button = ({ children, margin, click }) => {
  return (
    <ButtonWrapper margin={margin} onClick={click}>
      {children}
    </ButtonWrapper>
  )
}

export default Button
