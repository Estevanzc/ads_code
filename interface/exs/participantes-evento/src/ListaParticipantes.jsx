import Participante from "./Participante"

function ListaParticipantes({ people, setPeople }) {
    function updateConfirmation(id) {
        setPeople(people.map(person => person.id == id ? { ...person, confirmation: !person.confirmation } : person))
    }
    function removePerson(id) {
        setPeople(people.filter(person => person.id != id))
    }
    return (
        <ul>
            {people.length > 0 ? people.map(person => (<Participante person={person} updateConfirmation={updateConfirmation} removePerson={removePerson} />)) : (<p>Nenhum participante cadastrado</p>)}
        </ul>
    )
}

export default ListaParticipantes