import { useState } from 'react'
import './App.css'
import FormularioPerfil from './FormularioPerfil'
import CartaoPerfil from './CartaoPerfil'

function App() {
  let [person, setPerson] = useState({
    name: null,
    course: null,
    technology: null,
    resume: null,
  })

  function clear() {
    setPerson({
      name: null,
      course: null,
      technology: null,
      resume: null,
    })
  }
  return (
    <>
      <button onClick={clear}>Limpar perfil</button>
      <FormularioPerfil person={person} setPerson={setPerson} />
      <CartaoPerfil person={person} />
    </>
  )
}

export default App
