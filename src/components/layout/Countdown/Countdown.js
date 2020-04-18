import React, { useState, useEffect } from 'react'

const CountdownTimer = () => {
  const time = `${new Date().getFullYear()}-11-29`

  const calculateTimeLeft = (time) => {
    const difference = +new Date(time) - +new Date()
    let timeLeft = {}
    if (difference > 0) {
      timeLeft = {
        Dni: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Godzin: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minut: Math.floor((difference / 1000 / 60) % 60),
        Sekund: Math.floor((difference / 1000) % 60),
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

  const timerComponents = []

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <div key={interval}>
        <span>{timeLeft[interval]}</span>
        <span>{interval}</span>
      </div>
    )
  })

  return (
    <div>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  )
}

export default CountdownTimer
