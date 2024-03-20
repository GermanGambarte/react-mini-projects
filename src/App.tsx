import { features } from './data/data'
import './App.css'
import { useState } from 'react'

function App() {
  const [multipleSelection, setMultipleSelection] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<number[]>([])

  function handleMultipleSelection() {
    setMultipleSelection(!multipleSelection)
    multipleSelection && setIsOpen([])
  }

  function handleClickFeature(id: number) {
    const featureIsOpen = isOpen.indexOf(id)
    if (multipleSelection) {
      if (featureIsOpen == -1) {
        setIsOpen((prevState) => [...prevState, id])
        return
      }
      setIsOpen((prevState) => prevState.filter((stateId) => stateId != id))
    } else {
      if (featureIsOpen == -1) {
        setIsOpen([id])
        return
      }
      setIsOpen([])
    }
  }

  return (
    <>
      <main>
        <h1>Caracteristicas de React</h1>
        <button onClick={handleMultipleSelection}>
          {multipleSelection ? 'Disable' : 'Enable'} Multiple Selection
        </button>
        <section>
          {features.map(({ id, title, content }) => (
            <article key={id}>
              <header>
                <h2>{title}</h2>
                <button onClick={() => handleClickFeature(id)}>
                  {isOpen.indexOf(id) == -1 ? 'Open' : 'Close'}
                </button>
              </header>
              <p hidden={isOpen.indexOf(id) == -1}>{content}</p>
            </article>
          ))}
        </section>
      </main>
    </>
  )
}

export default App
