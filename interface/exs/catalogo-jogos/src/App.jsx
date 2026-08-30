import { useState } from 'react'
import './App.css'
import FiltroJogos from './FiltroJogos';
import ListaJogos from './ListaJogos';

function App() {
  const jogos = [
    { id: 1, nome: "Minecraft", genero: "Aventura", plataforma: "PC" },
    { id: 2, nome: "Valorant", genero: "Competitivo", plataforma: "PC" },
    { id: 3, nome: "Mario Kart", genero: "Corrida", plataforma: "Console" },
    { id: 4, nome: "EA Sports FC", genero: "Esporte", plataforma: "Console" },
    { id: 5, nome: "Stardew Valley", genero: "Simulação", plataforma: "PC" },
    { id: 6, nome: "Rocket League", genero: "Esporte", plataforma: "Console" }
  ];

  return (
    <>
    <FiltroJogos games={jogos} />
    </>
  )
}

export default App
