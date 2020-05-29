import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import HeaderSmall from '../../layout/Header/HeaderSmall'
import Hamburger from '../../layout/SectionInfo/Hamburger'
import { FirstMenu } from '../../layout/SectionInfo/FirstMenu'
import { NavWrapper } from '../../layout/SectionInfo/NavWrapper'
import SideMenu from '../../layout/SectionInfo/SideMenu'
import { LinkWrapper } from '../../layout/SectionInfo/LinkWrapper'
import ShopDescription from '../../layout/ShopDescription'

const Shopsite = () => {
  const [open, setOpen] = useState(false)
  const { shopName } = useParams()
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
          <header>Black Friday w {shopName}</header>
          {window.innerWidth > 375 && goBack}
        </FirstMenu>
      </NavWrapper>
      <div style={{ display: 'flex' }}>
        <SideMenu open={open} />
        <ShopDescription shop={shopName} />
      </div>
    </>
  )
}

export default Shopsite
