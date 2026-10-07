function ResumoEncontro(props) {
    return (
        props.events.length > 0 ? (
            <ul>
                {props.events.map((event, idx) => (
                    <>
                        <ul key={idx}>
                            <li>Nome do encontro: {event.name}</li>
                            <li>Data: {event.date}</li>
                            <li>Local: {event.address}</li>
                            <li>Quantidade de Participantes: {event.num}</li>
                        </ul>
                        <br />
                    </>
                ))}
            </ul>
        ) : (
            <p>Nenhum evento marcado</p>
        )
    )
}

export default ResumoEncontro