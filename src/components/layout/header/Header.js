import React from 'react'
import { colors } from '../../../utils/colors'
import Logo from '../Logo/Logo'
import Button from '../Button'
import Title from '../title/Title'

const HeaderImg = () => {
  const style = {
    width: '100vw',
    height: '880px',
    background: colors.headerColor,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
  return (
    <header style={style}>
      <Logo />
      <Button />
      <Title />
    </header>
  )
}

export default HeaderImg
