import React from 'react'
import { ArticleWrapper } from './ArticleWrapper'
import { ArticleTitle } from './ArticleTitle'
import Infobox from '../Infobox'
import { InternationalWrapper } from './InternationalWrapper'

const International = ({ countries }) => {
  return (
    <ArticleWrapper>
      <header>
        <ArticleTitle>Wszystkie kraje</ArticleTitle>
      </header>
      <InternationalWrapper>
        {countries.map((country, id) => (
          <Infobox key={id} img={country.img} country={country.name} />
        ))}
      </InternationalWrapper>
    </ArticleWrapper>
  )
}
export default International
