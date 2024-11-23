import { useState } from 'react'
import './App.css'
import Instructions from './components/Instructions'
import GameBoard from './components/GameBoard'

function App() {

  const [word, setWord] = useState([]);

  return (
    <>
      { word.length === 0 ? <Instructions word={word} setWord={setWord} /> : <GameBoard /> }
    </>
  )
}

export default App