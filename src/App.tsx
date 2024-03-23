import { useState } from 'react'
import './App.css'
import { HiOutlineStar } from 'react-icons/hi2'

function App() {
  const noOfStars = Array(5).fill(null)
  const [rating, setRating] = useState<number>(0)
  const [hover, setHover] = useState<number>(0)

  function handleClick(currentIdx: number) {
    setRating(currentIdx)
  }

  function handleMouseEnter(currentIdx: number) {
    setHover(currentIdx)
  }

  function handleMouseLeave() {
    setHover(rating)
  }

  return (
    <main>
      <h1>Star Rating</h1>
      <section>
        {
          noOfStars.map((_, index) => {
            return <HiOutlineStar
              key={index}
              className={index <= (hover || rating) ? 'active' : 'no-active'}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />

          })
        }
      </section>
    </main>
  )
}

export default App
