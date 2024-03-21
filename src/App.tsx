import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [currentColor, setCurrentColor] = useState<string>('')

  function generateColorValue() {
    return Math.floor(Math.random() * 255 + 1)
  }

  function generateHEXColor() {
    let color: string = '#'
    for (let i = 0; i < 3; i++) {
      color += generateColorValue().toString(16).padStart(2, '0')
    }
    setCurrentColor(color)
  }

  function generateRGBColor() {
    const color: number[] = []
    for (let i = 0; i < 3; i++) {
      color.push(generateColorValue())
    }
    const [r, g, b] = color
    setCurrentColor(`rgb(${r},${g},${b})`)
  }

  useEffect(() => {
    generateHEXColor()
  }, [])

  return (
    <>
      <header>
        <button onClick={generateHEXColor}>Create HEX Color</button>
        <button onClick={generateRGBColor}>Create RGB Color</button>
        <button onClick={generateHEXColor}>Generate Random Color</button>
      </header>
      <main style={{ backgroundColor: `${currentColor}` }}>
        <h1>{currentColor}</h1>
      </main>
    </>
  )
}

export default App
