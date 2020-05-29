import React from 'react'
import { NavLink } from 'react-router-dom'
import { bool } from 'prop-types'
import { promotedStores } from '../../../utils/promotedStores'
import { SideMenuWrapper } from './SideMenuWrapper'

const SideMenu = ({ open, countries, article }) => {
  if (!article && countries) {
    return (
      <SideMenuWrapper open={open}>
        <ul>
          {countries.map((country, id) => (
            <a key={id} href={country.link}>
              <li>Black Friday: {country.name}</li>
            </a>
          ))}
        </ul>
      </SideMenuWrapper>
    )
  }

  return (
    <SideMenuWrapper open={open}>
      <ul>
        <li>
          <NavLink activeClassName='active' to='/article/facts-and-numbers'>
            Black Friday: facts and numbers
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/article/trends-past-years'>
            Trends in the past years
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/article/spending'>
            Black Friday spending
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName='active'
            to='/article/pieces-of-black-friday-cake'
          >
            Pieces of Black Friday Cake
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName='active'
            to='/article/frequntly-asked-questions'
          >
            Frequently Asked Questions
          </NavLink>
        </li>
        {promotedStores.map((shop) => (
          <li key={shop.id}>
            <NavLink activeClassName='active' to={`/${shop.shopName}`}>
              Black Friday w {shop.shopName}
            </NavLink>
          </li>
        ))}
      </ul>
    </SideMenuWrapper>
  )
}

SideMenu.propTypes = {
  open: bool.isRequired,
}

export default SideMenu
