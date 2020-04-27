import React, { useState, useEffect } from 'react'
import CountdownWrapper from './CountdownWrapper'
import CountdownItem from './CountdownItem'
import CountdownTitle from './CountdownTitle'
import Title from '../Title'

const CountdownTimer = () => {
  const time = `${new Date().getFullYear()}-11-29`

  const calculateTimeLeft = (time) => {
    const difference = +new Date(time) - +new Date()
    let timeLeft = {}
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
      return timeLeft
    }
  }
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(time))

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(time))
    }, 1000)
  })

  if (!timeLeft) {
    return (
      <Title as='h2' h2>
        Najnowsze Promocje
      </Title>
    )
  }

  return (
    <>
      <CountdownTitle>29 listopada, czyli już za:</CountdownTitle>
      <CountdownWrapper>
        <CountdownItem>
          <span>{timeLeft.days}</span>
          <span>Dni</span>
        </CountdownItem>
        <CountdownItem>
          <span>{timeLeft.hours}</span>
          <span>Godzin</span>
        </CountdownItem>
        <CountdownItem>
          <span>{timeLeft.minutes}</span>
          <span>Minut</span>
        </CountdownItem>
        <CountdownItem>
          <span>{timeLeft.seconds}</span>
          <span>Sekund</span>
        </CountdownItem>
      </CountdownWrapper>
    </>
  )
}

export default CountdownTimer
