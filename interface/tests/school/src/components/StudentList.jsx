import { useEffect, useState } from "react";

function StudentList() {
    let [data, setData] = useState([
        { nome: "João", nota: 8 },
        { nome: "Maria", nota: 9 },
        { nome: "Carlos", nota: 7 },
        { nome: "Ana", nota: 10 }
    ])

    useEffect(() => {
        console.log("Componente StudentList montado!");

    }, [])

    function addStudent() {
        if (!data.find(student => student.nome == "Pedro")) {
            setData([...data, { nome: "Pedro", nota: 9 }])
            return
        }
        alert("Aluno já inserido")
    }
    const button = {
        backgroundColor: "#f0f0f0",
        fontWeight: "bold",
        padding: "10px 15px",
        borderRadius: "5px",
        border: "none"
    }

    return (<>
        <h1>Lista de Estudantes</h1>
        <ul>
            {data.map(student => (<li>{student.nome} - Nota: {student.nota}</li>))}
        </ul>
        <button style={button} onClick={addStudent}>Adicionar Estudante Pedro</button>
    </>);
}

export default StudentList