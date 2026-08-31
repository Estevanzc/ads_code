import { useState } from "react"

function FormularioMusica({ songs, setSong }) {
    let [title, setTitle] = useState("")
    let [author, setAuthor] = useState("")

    function submit(e) {
        e.preventDefault()
        if (title.trim() && author.trim()) {
            setSong([...songs, {
                title: title,
                author: author
            }])
            setTitle("")
            setAuthor("")
        }
    }
    return (
        <>
            <form action="" onSubmit={(e) => submit(e)}>
                <input type="text" id="title" name="title" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title} />
                <input type="text" id="author" name="author" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} value={author} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default FormularioMusica