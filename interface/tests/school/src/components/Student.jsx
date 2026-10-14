function Student(props) {
    return (<>
        <h2>{props.student.nome}</h2>
        <p>Nota: {props.student.nota}</p>
    </>);
}

export default Student