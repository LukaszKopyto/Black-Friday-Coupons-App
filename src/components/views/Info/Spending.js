import React from 'react'
import { ArticleWrapper } from '../../layout/Article/ArticleWrapper'
import { ArticleTitle } from '../../layout/Article/ArticleTitle'
import { ArticleMain } from '../../layout/Article/ArticleMain'
import spendingImage from '../../../images/spending.png'
import { ArticleImage } from '../../layout/Article/ArticleImage'

const Facts = ({ title }) => {
  return (
    <ArticleWrapper>
      <header>
        <ArticleTitle>{title}</ArticleTitle>
      </header>

      <ArticleMain>
        <p>
          British people are planning on taking part in both online and
          brick-and-mortar sales. Those who will cho262ose more than one channel
          are ready to spend around £315. It is equivalent to €351. In other
          countries, shoppers have a smaller budget in mind, like Germans
          (€211), Italians (€203) or Russians (€120). In contrast, consumers who
          declare to spend record-breaking amounts come from the USA (€429) and
          Canada (€381).
        </p>
        <picture>
          <ArticleImage
            src={spendingImage}
            alt='Black Friday: facts and numbers'
          />
        </picture>
        <p>
          According to the data from 2018, when shopping online during Black
          Friday, more than half (54.9 per cent) of British customers used
          smartphones, 38.6 per cent preferred desktops, and the remaining 6.4
          percent chose tablets. Purchasing with smartphones was a global trend,
          noted among others in Germany, Turkey, or Indonesia.
        </p>

        <p>
          For several years, Black-Friday analysts have been closely following
          Black Friday trends around the world. Below, we present a handful of
          statistics and interesting facts connected with the busiest shopping
          day in the world.
        </p>
      </ArticleMain>
    </ArticleWrapper>
  )
}

export default Facts
