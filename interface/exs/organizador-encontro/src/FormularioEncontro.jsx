import { useEffect, useState } from "react"

function FormularioEncontro(props) {
    let [name, setName] = useState("")
    let [date, setDate] = useState("")
    let [address, setAddress] = useState("")
    let [num, setNum] = useState(0)
    let [error, setError] = useState(false)
    let [success, setSuccess] = useState(false)

    function add(e) {
        e.preventDefault()
        if (name.trim() && date && address.trim() && num > 0) {
            props.setEvents([...props.events, {
                name: name,
                date: date,
                address: address,
                num: num,
            }])
            setName("")
            setDate("")
            setAddress("")
            setNum(0)
            setError(false)
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
            }, 1000);
        } else {
            setError(true)
        }
    }
    return (
        <form action="" onSubmit={(e) => add(e)}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome do evento" />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Endereço do evento" />
            <input type="number" value={num} min={0} step={1} onChange={(e) => setNum(e.target.value)} placeholder="Número de participantes" />
            <button type="submit">Submit</button>
            {error && <p>Erro: Campos não preenchidos ou incorretos</p>}
            {success && <p>Evento criado com sucesso!</p>}
        </form>
    )
}

export default FormularioEncontro