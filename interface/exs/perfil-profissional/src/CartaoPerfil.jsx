function CartaoPerfil({person}) {
    return (
        <ul>
            {Object.keys(person).map(field => !person[field] ? (<li>{field} não informado</li>) : (<li>{field}: {person[field]}</li>))}
        </ul>
    )
}

export default CartaoPerfil