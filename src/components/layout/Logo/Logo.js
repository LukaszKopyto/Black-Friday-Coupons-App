import React from 'react'
import { Link } from 'react-router-dom'
import AleRabatLogo from '../../../logo.svg'
import { LogoWrapper } from './LogoWrapper'

const Logo = ({ small }) => {
  return (
    <Link to='/'>
      <LogoWrapper small={small}>
        <img src={AleRabatLogo} alt='AleRabat.com' title='AleRabat.com' />
      </LogoWrapper>
    </Link>
  )
}

export default Logo
