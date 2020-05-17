import React from 'react'
import { ButtonWrapper } from './ButtonWrapper'

const Button = ({ children, ghostBtn, textColor, margin, click }) => {
  return (
    <ButtonWrapper
      ghostBtn={ghostBtn}
      textColor={textColor}
      margin={margin}
      onClick={click}
    >
      {children}
    </ButtonWrapper>
  )
}

export default Button
