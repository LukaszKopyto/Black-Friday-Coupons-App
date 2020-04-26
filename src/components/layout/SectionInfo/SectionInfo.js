import React from 'react'
import { Hamburger } from './Hamburger'
import { SectionWrapper } from './SectionWrapper'
import { FirstMenu } from './FirstMenu'
import { SecondMenu } from './SecondMenu'
import Article from '../Article'
import { NavWrapper } from './NavWrapper'
import SideMenu from './SideMenu'
import { ArticleAndSideMenuWrapper } from './ArticleAndSideMenuWrapper'

const SectionInfo = () => {
  return (
    <SectionWrapper>
      <NavWrapper>
        <FirstMenu>
          <Hamburger></Hamburger>
          <header>Black Friday - Podstawowe informacje</header>
        </FirstMenu>
        <SecondMenu>
          <li className='active'>Podstawowe informacje</li>
          <li>Black Friday w innych krajach</li>
        </SecondMenu>
      </NavWrapper>
      <ArticleAndSideMenuWrapper>
        <SideMenu />
        <Article />
      </ArticleAndSideMenuWrapper>
    </SectionWrapper>
  )
}

export default SectionInfo
