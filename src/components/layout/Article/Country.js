import React from 'react'
import Australia from '../../../images/Australia.jpg'

export const Country = () => {
  return (
    <section>
      <img src={Australia} alt='Australia Black Friday' />
      <h3>Australia</h3>
      <p>
        Statistics show that the number of transactions on Black Friday in
        Argentina increases by 325% in comparison with a regular Friday.
        Argentinians do love Black Friday and it pays off! People from Argentina
        on average save 48% of the original price during Black Friday.
      </p>
    </section>
  )
}
