import Student from "./Student";

function Classroom(props) {
    return (<>
        <h1>{props.turma.nomeDaTurma}</h1>
        <p>Quantidade de estudantes: {props.turma.estudantes.length}</p>
        {props.turma.estudantes.map(student => (<Student key={student.nome} student={student} />))}
    </>);
}

export default Classroom