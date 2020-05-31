import React from 'react'
import { ArticleWrapper } from '../../layout/Article/ArticleWrapper'
import { ArticleTitle } from '../../layout/Article/ArticleTitle'
import { ArticleMain } from '../../layout/Article/ArticleMain'
import BFPieces from '../../../images/pieces.png'
import { ArticleImage } from '../../layout/Article/ArticleImage'

const Facts = ({ title }) => {
  return (
    <ArticleWrapper>
      <header>
        <ArticleTitle>Pieces of Black Friday Cake</ArticleTitle>
      </header>

      <ArticleMain>
        <p>
          Every year, the world press feeds us with dozens of photos of crowds
          besieging electronics stores. Surprisingly though, the results of our
          survey state that clothes, not electronics, are the actual apple of
          bargain hunters’ eye. Consumer electronics category came second in our
          ranking. On the other side of the scale books, sports accessories and
          underwear were the least popular items to buy.
        </p>

        <picture>
          <ArticleImage src={BFPieces} alt='Black Friday: facts and numbers' />
        </picture>
      </ArticleMain>
    </ArticleWrapper>
  )
}

export default Facts
