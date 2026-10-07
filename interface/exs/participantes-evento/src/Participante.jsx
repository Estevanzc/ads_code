function Participante({ person, updateConfirmation, removePerson }) {
    return (
        <li>
            <ul style={{backgroundColor: person.confirmation ? "lightblue" : ""}}>
                <li>id: {person.id}</li>
                <li>name: {person.name}</li>
                <li>course: {person.course}</li>
                <li>confirmation: {person.confirmation}</li>
                <li><button onClick={() => updateConfirmation(person.id)}>{person.confirmation ? "Cancelar confirmação" : "Confirmar presença"}</button></li>
                <li><button onClick={() => removePerson(person.id)}>Remover Participante</button></li>
            </ul>
        </li>
    )
}

export default Participante