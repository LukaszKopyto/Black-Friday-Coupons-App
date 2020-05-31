import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import HeaderSmall from '../../layout/Header/HeaderSmall'
import Hamburger from '../../layout/SectionInfo/Hamburger'
import { FirstMenu } from '../../layout/SectionInfo/FirstMenu'
import { NavWrapper } from '../../layout/SectionInfo/NavWrapper'
import SideMenu from '../../layout/SectionInfo/SideMenu'
import { LinkWrapper } from '../../layout/SectionInfo/LinkWrapper'
import Facts from './Facts'
import Trends from './Trends'
import Spending from './Spending'
import Pieces from './Pieces'
import Qa from './Qa'

const Info = ({ children, title }) => {
  const [open, setOpen] = useState(false)
  const history = useHistory()
  const { articleTitle } = useParams()

  const handleGoBack = () => {
    history.goBack()
  }

  const goBack = (
    <LinkWrapper>
      <button onClick={handleGoBack}>Wróć</button>
    </LinkWrapper>
  )

  const types = {
    'facts-and-numbers': { title: 'Facts and numbers', component: <Facts /> },
    'trends-past-years': { title: 'Trends past years', component: <Trends /> },
    spending: { title: 'Spending', component: <Spending /> },
    'pieces-of-black-friday-cake': {
      title: 'Pieces of black friday cake',
      component: <Pieces />,
    },
    'frequntly-asked-questions': {
      title: 'Frequntly asked questions',
      component: <Qa />,
    },
  }

  return (
    <>
      <HeaderSmall />
      <NavWrapper>
        <FirstMenu toLeft>
          <Hamburger open={open} setOpen={setOpen}></Hamburger>
          <header>Black Friday: {types[articleTitle].title}</header>
          {window.innerWidth > 375 && goBack}
        </FirstMenu>
      </NavWrapper>
      <div style={{ display: 'flex' }}>
        <SideMenu open={open} />
        {types[articleTitle].component}
      </div>
    </>
  )
}

export default Info
