import React from 'react'
import { ArticleWrapper } from '../../layout/Article/ArticleWrapper'
import { ArticleTitle } from '../../layout/Article/ArticleTitle'
import { ArticleMain } from '../../layout/Article/ArticleMain'

const Facts = ({ title }) => {
  return (
    <ArticleWrapper>
      <header>
        <ArticleTitle>Frequently Asked Questions</ArticleTitle>
      </header>

      <ArticleMain>
        <h4>What is Black Friday?</h4>
        <p>
          Black Friday is a unique day, during which stores around the world
          lower the prices of their products to a big extent.
        </p>

        <h4>When is Black Friday?</h4>
        <p>This year the Black Friday is November 29.</p>

        <h4>Is it worth waiting for Black Friday?</h4>
        <p>
          Sure! Even though Black Friday is not the only opportunity to save a
          lot of money, such a great discounts are available only during the
          last Friday of November!{' '}
        </p>

        <h4>Is it safe to buy on Black Friday?</h4>
        <p>
          For sure buying online is much safer than shopping in crowded malls.
          Black-Friday is a safe place where only real offers from verified
          shops are presented.
        </p>

        <h4>What kind of discounts can I expect on Black Friday?</h4>
        <p>
          On average during Black Friday users enjoy 55% markdown. A true
          bargain hunters might even have the opportunity to grab some products
          for a single pound!
        </p>
      </ArticleMain>
    </ArticleWrapper>
  )
}

export default Facts
