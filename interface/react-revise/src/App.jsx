import { useState } from 'react'
import './App.css'
import Registration from './components/Registration';
import EventList from './components/EventList';
import Salchipao from './components/Salchipao';

function App() {

  const palestras = [
    {
      id: 1, titulo: "Palestra 1: Desenvolvimento Web", data: "28/10", horario: "10h00", local:
        "Online"
    },
    {
      id: 2, titulo: "Palestra 2: Segurança da Informação", data: "29/10", horario: "14h00", local:
        "Presencial"
    },
    {
      id: 3, titulo: "Palestra 3: Inteligência Artificial", data: "30/10", horario: "16h00", local:
        "Online"
    },
    { id: 4, titulo: "Salchipão do ADS", data: "31/10", horario: "12h00", local: "Presencial" }
  ];

  return (
    <div className='w-screen min-h-screen bg-[#f0f0f0] flex justify-start items-center flex-col py-10'>
      <h2 className='text-5xl font-bold'>XV Jornada Acadêmica</h2>
      <p className='text-lg pt-7 text-[#272727]'>Participe da nossa XV Jornada Acadêmica que ocorrerá de 28 a 31 de Outubro.</p>
      <Registration />
      <EventList palestras={palestras} />
      <Salchipao />
    </div>
  )
}

export default App
