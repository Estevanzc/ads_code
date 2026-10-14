import { memo } from "react"

const Teacher = memo((props) => {
    console.log("Renderizando Teacher em", new Date().toLocaleTimeString());
    return <>
        <p><strong>Nome:</strong> {props.teacher.nome}</p>
        <p><strong>Disciplina:</strong> {props.teacher.disciplina ? "Matemática" : "Física"}</p>
    </>;
});

export default Teacher