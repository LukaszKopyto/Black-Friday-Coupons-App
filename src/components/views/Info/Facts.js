import React from 'react'
import Info from './Info'
import { ArticleWrapper } from '../../layout/Article/ArticleWrapper'
import { ArticleTitle } from '../../layout/Article/ArticleTitle'
import { ArticleMain } from '../../layout/Article/ArticleMain'
import Bf from '../../../images/BF.jpg'
import { ArticleImage } from '../../layout/Article/ArticleImage'

const Facts = ({ title }) => {
  return (
    <Info title={title}>
      <ArticleWrapper>
        <header>
          <ArticleTitle>Black Friday: facts and numbers</ArticleTitle>
        </header>

        <ArticleMain>
          <p>
            In the autumn and winter season, Black Friday sale plays an
            important role not only in terms of e-commerce turnover but also the
            activity of shoppers. With the beginning of November, small and
            middle-sized businesses, as well as bigger players on the market,
            begin Black Friday preparations. They announce huge sales to take
            place at the end of November, in both online and brick-and-mortar
            stores.
          </p>

          <p>
            Curiously enough, merchants claim that this is not entirely about
            the fight for increasing their sales. In a sense, sellers and buyers
            swap places during Black Friday. In normal circumstances, customers
            gain benefits by shopping regularly and thus asserting their
            loyalty. In November, stores are the ones that must prove loyalty
            toward their clients, which can be assessed with regard to the level
            of rebates and availability of highly discounted products.
          </p>

          <p>
            For several years, Black-Friday.Global analysts have been closely
            following Black Friday trends around the world. Below, we present a
            handful of statistics and interesting facts connected with the
            busiest shopping day in the world.
          </p>
          <ArticleTitle>Black Friday: facts and numbers</ArticleTitle>
          <picture>
            <ArticleImage src={Bf} alt='Black Friday: facts and numbers' />
          </picture>
        </ArticleMain>
      </ArticleWrapper>
    </Info>
  )
}

export default Facts
