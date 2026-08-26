import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [userType, setUserType] = useState("Admin")

  function changeUserType() {
    setUserType(userType == "Admin" ? "Visitante" : "Admin")
  }
  return (
    <>
      {userType == "Admin" ? (
        <>
          <p>Bem-vindo, Admin</p>
          <button>Gerenciar Usuários</button>
        </>
      ) : (
        <>
          <p>Bem-vindo, Visitante</p>
          <button>Fazer Login</button>
        </>
      )}
      <button onClick={changeUserType}>Mudar tipo de usuários</button>
    </>
  )
}

export default App
