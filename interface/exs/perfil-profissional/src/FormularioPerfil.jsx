function FormularioPerfil({person, setPerson}) {
    return (
        <form action="">
            {Object.keys(person).map(field => (<>
            <label>{field}</label>
            <br />
            <input type="text" key={field} id={field} name={field} onChange={(e) => setPerson({...person, [field]: e.target.value})} value={person[field]} />
            <br />
            <br />
            </>))}
        </form>
    )
}

export default FormularioPerfil