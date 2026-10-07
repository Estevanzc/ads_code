function ResumoParticipantes({ people }) {
    return (
        <>
        <p>Número de confirmados: {people.filter(person => person.confirmation).length}</p>
        <p>Número de cadastrados: {people.length}</p>
        </>
    )
}

export default ResumoParticipantes