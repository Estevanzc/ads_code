import { useState } from "react"
import Teacher from "./Teacher"

function School() {
    let [schoolName, setSchoolName] = useState(true)
    let [teacher, setTeacher] = useState({
        nome: "Prof. Maurício",
        disciplina: false,
    })
    function changeSchool() {
        setSchoolName(!schoolName)
    }
    function changeTeacher() {
        setTeacher({ ...teacher, disciplina: !teacher.disciplina })
    }
    const div = {
        display: "flex",
        justifyContent: "center",
        gap: "0px 10px"
    }
    const button = {
        backgroundColor: "#f0f0f0",
        fontWeight: "bold",
        padding: "10px 15px",
        borderRadius: "5px",
        border: "none"
    }
    return (<>
        <h1>{schoolName ? "Escola ABC" : "Escola XYZ"}</h1>
        <Teacher teacher={teacher} />
        <div style={div}>
            <button style={button} onClick={changeTeacher}>Alterar Disciplina do Professor</button>
            <button style={button} onClick={changeSchool}>Alterar Nome da Escola</button>
        </div>
    </>)
}

export default School