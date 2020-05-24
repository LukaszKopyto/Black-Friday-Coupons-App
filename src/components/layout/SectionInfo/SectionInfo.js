import React, { useState } from 'react'
import Hamburger from './Hamburger'
import { SectionWrapper } from './SectionWrapper'
import { FirstMenu } from './FirstMenu'
import { SecondMenu } from './SecondMenu'
import Article from '../Article'
import { NavWrapper } from './NavWrapper'
import SideMenu from './SideMenu'
import { ArticleAndSideMenuWrapper } from './ArticleAndSideMenuWrapper'
import International from '../Article/International'
import Australia from '../../../images/Australia.jpg'
import Austria from '../../../images/Austria.jpg'
import Brazil from '../../../images/Brasil.jpg'
import Czechia from '../../../images/Czechia.jpg'
import France from '../../../images/France.jpg'
import Germany from '../../../images/Germany.jpg'
import India from '../../../images/India.jpg'
import Mexico from '../../../images/Mexico.jpg'
import Portugal from '../../../images/Portugal.jpg'
import Russia from '../../../images/Russia.jpg'
import Spain from '../../../images/Spain.jpg'
import Turkey from '../../../images/Turkey.jpg'
import UnitedKingdom from '../../../images/UnitedKingdom.jpg'
import UnitedStates from '../../../images/UnitedState.jpg'

const SectionInfo = () => {
  const [open, setOpen] = useState(false)
  const [article, setArticle] = useState(false)

  const countries = [
    {
      name: 'Australia',
      link: 'https://buykers.com/au/',
      img: Australia,
    },
    {
      name: 'Austria',
      link: 'https://buykers.com/at/',
      img: Austria,
    },
    {
      name: 'Brazil',
      link: 'https://buykers.com/br/',
      img: Brazil,
    },
    {
      name: 'Czechia',
      link: 'https://buykers.com/cz/',
      img: Czechia,
    },
    {
      name: 'France',
      link: 'https://buykers.com/fr/',
      img: France,
    },
    {
      name: 'Germany',
      link: 'https://buykers.com/de/',
      img: Germany,
    },
    {
      name: 'India',
      link: 'https://buykers.com/in/',
      img: India,
    },
    {
      name: 'Mexico',
      link: 'https://buykers.com/mx/',
      img: Mexico,
    },
    {
      name: 'Portugal',
      link: 'https://buykers.com/pt/',
      img: Portugal,
    },
    {
      name: 'Russia',
      link: 'https://buykers.com/ru/',
      img: Russia,
    },
    {
      name: 'Spain',
      link: 'https://buykers.com/es/',
      img: Spain,
    },
    {
      name: 'Turkey',
      link: 'https://alerabat.com/tr/',
      img: Turkey,
    },
    {
      name: 'United Kingdom',
      link: 'https://buykers.com/uk/',
      img: UnitedKingdom,
    },
    {
      name: 'United States',
      link: 'https://buykers.com/us/',
      img: UnitedStates,
    },
  ]

  const handleChangeInfo = (e) => {
    e.target.className !== 'active' && setArticle((prevState) => !prevState)
  }

  return (
    <SectionWrapper>
      <NavWrapper>
        <FirstMenu toLeft>
          <Hamburger open={open} setOpen={setOpen}></Hamburger>
          <header>
            {article
              ? 'Black Friday - Podstawowe informacje'
              : 'Black Friday w innych krajach'}
          </header>
        </FirstMenu>
        <SecondMenu>
          <li className={article ? 'active' : null} onClick={handleChangeInfo}>
            Podstawowe informacje
          </li>
          <li className={article ? null : 'active'} onClick={handleChangeInfo}>
            Black Friday w innych krajach
          </li>
        </SecondMenu>
      </NavWrapper>
      <ArticleAndSideMenuWrapper>
        <SideMenu open={open} countries={countries} article={article} />
        {article ? <Article /> : <International countries={countries} />}
      </ArticleAndSideMenuWrapper>
    </SectionWrapper>
  )
}

export default SectionInfo
