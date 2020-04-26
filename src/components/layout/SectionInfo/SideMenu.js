import React from 'react'
import { bool } from 'prop-types'
import { SideMenuWrapper } from './SideMenuWrapper'

const SideMenu = ({ open }) => {
  return (
    <SideMenuWrapper open={open}>
      <ul>
        <li>Black Friday: facts and numbers</li>
        <li>Black Friday: trends in the past years</li>
        <li>Black Friday spending</li>
        <li>Methodology and data source</li>
        <li>Public Use</li>
        <li>Black Friday 2018 Around the World</li>
        <li>Global Recognition</li>
        <li>Black Friday: facts and numbers</li>
        <li>Black Friday: trends in the past years</li>
        <li>Black Friday spending</li>
        <li>Global Recognition</li>
        <li>Black Friday: facts and numbers</li>
        <li>Black Friday: trends in the past years</li>
        <li>Black Friday spending</li>
      </ul>
    </SideMenuWrapper>
  )
}

SideMenu.propTypes = {
  open: bool.isRequired,
}

export default SideMenu
