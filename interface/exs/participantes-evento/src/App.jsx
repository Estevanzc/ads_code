import { useState } from 'react'
import './App.css'
import FormularioParticipante from './FormularioParticipante'
import ListaParticipantes from './ListaParticipantes'
import ResumoParticipantes from './ResumoParticipantes'

function App() {
  let [people, setPeople] = useState([])
  let [lastIdx, setLastIdx] = useState(0)

  return (
    <>
    <ResumoParticipantes people={people} />
    <FormularioParticipante people={people} setPeople={setPeople} lastIdx={lastIdx} setLastIdx={setLastIdx} />
    <ListaParticipantes people={people} setPeople={setPeople} />
    </>
  )
}

export default App
