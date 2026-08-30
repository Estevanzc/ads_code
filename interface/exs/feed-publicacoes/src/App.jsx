import { useState } from 'react'
import './App.css'
import Feed from './Feed';

function App() {
  let [posts, setPosts] = useState([
    {
      id: 1,
      autor: "Marina",
      mensagem: "Finalizei meu primeiro projeto com React!",
      curtidas: 3,
      comentarios: []
    },
    {
      id: 2,
      autor: "Lucas",
      mensagem: "Alguém indica uma boa série para o fim de semana?",
      curtidas: 5,
      comentarios: []
    }
  ]);


  return (
    <>
      <Feed posts={posts} setPosts={setPosts} />
    </>
  )
}

export default App
