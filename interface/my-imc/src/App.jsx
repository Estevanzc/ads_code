import { useState } from 'react'
import './App.css'

function App() {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [imc, setImc] = useState(0)
  const stages = [[30, "Obesidade"], [25, "Sobrepeso"], [18.5, "Peso normal"], [0, "Abaixo do peso"]]

  function calc_imc(e) {
    e.preventDefault()
    setImc(Number((weight / (height ** 2)).toFixed(2)))
  }
  return (
    <>
      <form action="">
        <input type="number" onChange={(e) => setWeight(e.target.value)} placeholder='Type your weight' value={weight} />
        <input type="number" onChange={(e) => setHeight(e.target.value)} placeholder='Type your height' value={height} />
        <button onClick={(e) => calc_imc(e)}>Calc</button>
      </form>

      {imc != 0 && 
      <div>
        <p>IMC: {imc}</p>
        <p>{stages.find(stage => stage[0] <= imc)[1]}</p>
      </div>
      }
    </>
  )
}

export default App
