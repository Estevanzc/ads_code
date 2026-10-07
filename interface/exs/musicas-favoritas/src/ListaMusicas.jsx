import ItemMusica from "./ItemMusica"

function ListaMusicas({ songs, setSong }) {
    function remove(title) {
        setSong([...(songs.filter(song => song.title != title))])
    }
    return (
        <ul>
            {songs.map(song => (
                <>
                <ItemMusica song={song} setSong={setSong} remove={remove} />
                <br />
                </>
            ))}
        </ul>
    )
}

export default ListaMusicas