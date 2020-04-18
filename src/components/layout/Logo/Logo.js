import React from 'react'
import AleRabatLogo from '../../../logo.svg'
import { LogoWrapper } from './LogoWrapper'

const Logo = () => {
  return (
    <LogoWrapper>
      <img src={AleRabatLogo} alt='AleRabat.com' title='AleRabat.com' />
    </LogoWrapper>
  )
}

export default Logo
