import React from 'react'
import { Wrapper } from './Wrapper'
import { ImageAndTitleWrapper } from './ImageAndTitleWrapper'

const descSample = `Statistics show that the number of transactions on Black Friday in Argentina increases by 325% in comparison with a regular Friday.
Argentinians do love Black Friday and it pays off! People from Argentina
on average save 48% of the original price during Black Friday.`

const Infobox = ({ img, country, desc = descSample }) => {
  return (
    <Wrapper>
      <ImageAndTitleWrapper>
        <img src={img} alt='Australia Black Friday' />
        <h3>{country}</h3>
      </ImageAndTitleWrapper>
      <p>{desc}</p>
    </Wrapper>
  )
}

export default Infobox
