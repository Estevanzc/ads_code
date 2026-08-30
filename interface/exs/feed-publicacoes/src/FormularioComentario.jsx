import { useState } from "react"

function FormularioComentario({ id, addComment }) {
    let [comment, setComment] = useState("")

    function add(e) {
        e.preventDefault()
        if (comment.trim()) {
            addComment(id, comment)
            setComment("")
        }
    }
    return (
        <form action="" onSubmit={(e) => add(e)}>
            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Seu comentário" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default FormularioComentario