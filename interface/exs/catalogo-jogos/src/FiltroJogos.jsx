import { useState } from "react"
import ListaJogos from "./ListaJogos"

function FiltroJogos({ games }) {
    let [name, setName] = useState("")
    let [genreIdx, setGenreIdx] = useState(-1)

    function filter() {
        let genre = genreIdx == -1 ? null : games[genreIdx].genero
        return games.filter(game => {
            let matchesName = name.trim() ? game.nome.includes(name) : true
            let matchesGenre = genre ? game.genero == genre : true
            return matchesName && matchesGenre
        })
    }
    function clear() {
        setName("")
        setGenreIdx(-1)
    }

    return (
        <>
            <form action="" onReset={clear}>
                <input type="text" placeholder="Game name" value={name} onChange={(e) => {setName(e.target.value); filter}} />
                <select name="" id="" value={genreIdx} onChange={(e) => setGenreIdx(e.target.value)}>
                    <option value="-1">Selecione uma categoria</option>
                    {games.map((game, idx) => (
                        <option key={idx} value={idx}>{game.genero}</option>
                    ))}
                </select>
                <button type="reset">Limpar Filtro</button>
            </form>
            <ListaJogos games={filter()} />
        </>
    )
}

export default FiltroJogos