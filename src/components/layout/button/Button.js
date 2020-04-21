import React from 'react'
import { ButtonWrapper } from './ButtonWrapper'

const Button = ({ children, ghostBtn, textColor, margin }) => {
  return (
    <ButtonWrapper ghostBtn={ghostBtn} textColor={textColor} margin={margin}>
      {children}
    </ButtonWrapper>
  )
}

export default Button
