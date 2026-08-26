import { use, useState } from "react"

function Avaliacao() {
    let [title, setTitle] = useState("")
    let [rating, setRating] = useState(null)
    let ratings = [1, 2, 3, 4, 5]
    function clear() {
        setRating(null)
    }
    let response_map = [
        "Não recomendaria",
        "Não recomendaria",
        "Vale assistir",
        "Entrou para os favoritos",
        "Entrou para os favoritos",
    ]
    return (
        <>
            <input type="text" id="title" name="title" onChange={(e) => setTitle(e.target.value)} value={title} />
            <div>{ratings.map(rating_num => (<button key={rating_num} style={{ backgroundColor: rating == rating_num ? "blue" : "" }} onClick={() => setRating(rating_num)}>Nota {rating_num}</button>))}</div>
            <button onClick={clear}>Limpar Avaliação</button>
            {rating && title ? (
                <div>
                <p>Título escolhido: {title}</p>
                <p>Nota escolhida: {rating}/5 ({response_map[rating-1]})</p>
            </div>
            ) : (
                <p>Avaliação ainda não realizada</p>
            )}
        </>
    )
}

export default Avaliacao