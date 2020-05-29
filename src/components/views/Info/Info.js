import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import HeaderSmall from '../../layout/Header/HeaderSmall'
import Hamburger from '../../layout/SectionInfo/Hamburger'
import { FirstMenu } from '../../layout/SectionInfo/FirstMenu'
import { NavWrapper } from '../../layout/SectionInfo/NavWrapper'
import SideMenu from '../../layout/SectionInfo/SideMenu'
import { LinkWrapper } from '../../layout/SectionInfo/LinkWrapper'

const Info = ({ children, title }) => {
  const [open, setOpen] = useState(false)
  const history = useHistory()

  const handleGoBack = () => {
    history.goBack()
  }

  const goBack = (
    <LinkWrapper>
      <button onClick={handleGoBack}>Wróć</button>
    </LinkWrapper>
  )

  return (
    <>
      <HeaderSmall />
      <NavWrapper>
        <FirstMenu toLeft>
          <Hamburger open={open} setOpen={setOpen}></Hamburger>
          <header>{title}</header>
          {window.innerWidth > 375 && goBack}
        </FirstMenu>
      </NavWrapper>
      <div style={{ display: 'flex' }}>
        <SideMenu open={open} />
        {children}
      </div>
    </>
  )
}

export default Info
