import React from 'react'
import { bool, func } from 'prop-types'
import { HamburgerWrapper } from './HamburgerWrapper'

const Hamburger = ({ open, setOpen }) => {
  const handleOnClick = () => {
    setOpen(!open)
  }

  return <HamburgerWrapper open={open} onClick={handleOnClick} />
}

Hamburger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Hamburger
