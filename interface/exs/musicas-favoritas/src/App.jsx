import { useState } from 'react'
import './App.css'
import FormularioMusica from './FormularioMusica'
import ListaMusicas from './ListaMusicas'

function App() {
  let [songs, setSong] = useState([])

  return (
    <>
    <p>{songs.length == 0 ? "Nenhuma música cadastrada" : `Número de músicas cadastradas: ${songs.length}`}</p>
    <FormularioMusica songs={songs} setSong={setSong} />
    <ListaMusicas songs={songs} setSong={setSong} />
    </>
  )
}

export default App
