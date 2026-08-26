import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increase() {
    setCount(count + 1)
  }
  function decrease() {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  function clear() {
    setCount(0)
  }
  return (
    <>
      {count == 0 ? (<p>Nenhum ingresso selecionado</p>) : (<p>Quantidade de ingressos: {count}</p>)}
      <div>
        <button onClick={increase}>Adicionar Ingresso</button>
        <button onClick={decrease}>Remover Ingresso</button>
        <button onClick={clear}>Zerar</button>
      </div>
    </>
  )
}

export default App
