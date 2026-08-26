import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PrimeiroComponente from './components/PrimeiroComponente.jsx'
import SegundoComponente from './components/SegundoComponente.jsx'
import { CompA, CompB as B } from './components/DoisComponentes'
import MultiElementos from './components/MultiElementos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MultiElementos />
  </StrictMode>,
)
