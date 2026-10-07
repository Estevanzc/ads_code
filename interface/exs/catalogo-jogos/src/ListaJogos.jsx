import CardJogo from "./CardJogo"

function ListaJogos({ games }) {
    return (
        <>
            {games.length > 0 ? (
                <>
                    <p>Número de títulos encontrados: {games.length}</p>
                    <ul>
                        {games.map((game, idx) => (<><CardJogo key={idx} game={game} /><br /></>))}
                    </ul>
                </>
                ) : (
                    <p>Nenhum jogo encontrado</p>
                )
            }
        </>
    )
}

export default ListaJogos