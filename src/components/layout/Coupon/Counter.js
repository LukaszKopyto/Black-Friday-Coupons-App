import React from 'react'
import { ReactComponent as Heart } from '../../../images/heart.svg'
import { CounterWrapper } from './CounterWrapper'

const Counter = ({ click, like, color }) => {
  return (
    <CounterWrapper onClick={click} color={color}>
      <span>
        <Heart />
      </span>
      <span>{like}</span>
    </CounterWrapper>
  )
}

export default Counter
