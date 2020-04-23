import React from 'react'
import { Hamburger } from './Hamburger'
import { SectionWrapper } from './SectionWrapper'
import { FirstMenu } from './FirstMenu'
import { SecondMenu } from './SecondMenu'
import Article from '../Article'

const SectionInfo = () => {
  return (
    <SectionWrapper>
      <nav>
        <FirstMenu>
          <Hamburger></Hamburger>
          <header>Black Friday - Podstawowe informacje</header>
        </FirstMenu>
        <SecondMenu>
          <li>Podstawowe informacje</li>
          <li>Black Friday w innych krajach</li>
        </SecondMenu>
      </nav>
      <Article />
    </SectionWrapper>
  )
}

export default SectionInfo
