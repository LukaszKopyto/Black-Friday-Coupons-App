import React from 'react'
import { ReactComponent as Heart } from '../../../images/heart.svg'
import { CounterWrapper } from './CounterWrapper'

const Counter = ({ click, like, heartColor }) => {
  return (
    <CounterWrapper onClick={click} heartColor={heartColor}>
      <span>
        <Heart />
      </span>
      <span>{like}</span>
    </CounterWrapper>
  )
}

export default Counter
