import { useState } from 'react'
import './App.css'
import FormularioEncontro from './FormularioEncontro'
import ResumoEncontro from './ResumoEncontro'

function App() {
  let [events, setEvents] = useState([])

  function clear() {
    setEvents([])
  }
  return (
    <>
    <FormularioEncontro events={events} setEvents={setEvents} />
    <button onClick={clear}>Limpar</button>
    <ResumoEncontro events={events} />
    </>
  )
}

export default App
