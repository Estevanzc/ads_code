import { useState } from 'react'
import { Bomb } from "lucide-react";

function App() {
  let [board, setBoard] = useState(new Array(10).fill(new Array(10).fill({
    value: Math.floor(Math.random() * 2),
    near: 0,
    checked: false,
    clicked: false,
  })))
  console.log(board);

  return (
    <div className='w-screen h-screen bg-[#f0f0f0] flex justify-center items-center'>
      <div className='w-[500px] h-[500px] grid grid-cols-10 grid-rows-10 bg-[#cacaca]'>
        {board.map((row, rowIndex) =>
          row.map((cell, cellIndex) => (
            <div
              key={`${rowIndex}-${cellIndex}`}
              className="flex items-center justify-center bg-[#f0f0f0] shadow-[-20px_-20px_60px_#cccccc_inset,20px_20px_60px_#ffffff_inset] cursor-pointer transition-all hover:shadow-[-20px_-20px_60px_#cccccc,20px_20px_60px_#ffffff]"
            >
              {cell.value !== 0 && <Bomb />}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default App
