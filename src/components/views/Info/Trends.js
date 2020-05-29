import React from 'react'
import Info from './Info'
import { ArticleWrapper } from '../../layout/Article/ArticleWrapper'
import { ArticleTitle } from '../../layout/Article/ArticleTitle'
import { ArticleMain } from '../../layout/Article/ArticleMain'
import shoppingActivity from '../../../images/shopping-activity.png'
import { ArticleImage } from '../../layout/Article/ArticleImage'

const Facts = ({ title }) => {
  return (
    <Info title={title}>
      <ArticleWrapper>
        <header>
          <ArticleTitle>Black Friday: trends in the past years</ArticleTitle>
        </header>

        <ArticleMain>
          <p>
            In the beginning, Black Friday used to be a one-day happening in the
            United States.{' '}
            <strong>
              However, over the past few years, the event has grown into a
              shopping marathon that lasts for several days.
            </strong>{' '}
            It may sometimes start on Thursday and continue until the end of the
            week, or even month. In an attempt to grab consumers’ attention,
            some stores start the so-called presales as early as Monday.
            Nevertheless, in most countries, the peak of shoppers’ interest
            falls on the same day. In the United Kingdom, Google Trends data for
            19-25 November 2018 shows that one third of all queries related to
            Black Friday sales were recorded on Friday (33.9 per cent).
            Nevertheless, the interest of customers starts to grow on Wednesday
            and fades on Saturday. This tendency is characteristic for not only
            the UK but other countries as well.
          </p>

          <p>
            The research conducted by Black-Friday.Global in 2018 shows that 95
            per cent of surveyed British people are aware of the existence of
            Black Friday. However, not all of them were able to recall the exact
            date, which may explain the gradual increase of interest in this
            event even a few weeks before it takes place.
          </p>

          <p>
            For several years, Black-Friday analysts have been closely following
            Black Friday trends around the world. Below, we present a handful of
            statistics and interesting facts connected with the busiest shopping
            day in the world.
          </p>
          <ArticleTitle>Shopping activity</ArticleTitle>
          <picture>
            <ArticleImage
              src={shoppingActivity}
              alt='Black Friday: facts and numbers'
            />
          </picture>
        </ArticleMain>
      </ArticleWrapper>
    </Info>
  )
}

export default Facts
