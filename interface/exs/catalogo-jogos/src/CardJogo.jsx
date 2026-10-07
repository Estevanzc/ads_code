function CardJogo({ game }) {
    return (
        <>
            <li>name: {game.nome}</li>
            <li>genre: {game.genero}</li>
            <li>platform: {game.plataforma}</li>
        </>
    )
}

export default CardJogo