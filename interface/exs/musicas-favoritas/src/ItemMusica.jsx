function ItemMusica({song, setSong, remove}) {
    return (
        <li>
            <li>Título: {song.title}</li>
            <li>Artista: {song.author}</li>
            <button onClick={() => remove(song.title)}>Remove</button>
        </li>
    )
}

export default ItemMusica