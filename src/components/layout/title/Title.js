import React from 'react'
import { TitleWrapper } from './TitleWrapper'

const Title = () => {
  return (
    <>
      <TitleWrapper>
        <span>Black</span> Friday 2020
      </TitleWrapper>
      <TitleWrapper as='h2' h2>
        Najnowsze promocje
      </TitleWrapper>
    </>
  )
}

export default Title
