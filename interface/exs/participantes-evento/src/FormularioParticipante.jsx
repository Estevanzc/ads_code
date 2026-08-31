import { useState } from "react"

function FormularioParticipante({ people, setPeople, lastIdx, setLastIdx }) {

    let [name, setName] = useState("")
    let [course, setCourse] = useState("")
    function addPerson(event) {
        event.preventDefault()
        if (name.trim() && course.trim()) {
            setPeople([...people, {
                id: lastIdx > 0 ? lastIdx + 1 : 1,
                name: name,
                course: course,
                confirmation: false,
            }])
            setLastIdx(lastIdx + 1)
            setName("")
            setCourse("")
        }
    }
    return (
        <>
            <form action="" onSubmit={(e) => addPerson(e)}>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" id="course" name="course" value={course} onChange={(e) => setCourse(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default FormularioParticipante