import { useState } from 'react'
import './App.css'
import Perfil from './Perfil'

function App() {
  let [show, setShow] = useState(false)

  return (
    <>
    <button onClick={() => setShow(!show)}>{show ? "Ocultar perfil" : "Mostrar perfil"}</button>
    {show && <Perfil />}
    </>
  )
}

export default App
