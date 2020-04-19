import React from 'react'
import { ButtonWrapper } from './ButtonWrapper'

const Button = ({ children, ghostBtn }) => {
  return <ButtonWrapper ghostBtn={ghostBtn}>{children}</ButtonWrapper>
}

export default Button
