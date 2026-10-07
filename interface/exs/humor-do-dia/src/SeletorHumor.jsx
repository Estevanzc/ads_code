import { useState } from "react"

function SeletorHumor() {
    let responses = {
        "Animado": "Que bom, espero que continue!",
        "Tranquilo": "O programador dessa página com certeza não está",
        "Cansado": "Eu também",
        "Focado": "Previlégio",
        "Estressado": "Infelizmente, não és o único",
    }
    let [response, setResponse] = useState(null)
    function selectOption(option) {
        setResponse(option)
    }
    function clear() {
        setResponse(null)
    }
    return (
        <>
            <p>{response ? ("Humor escolhido: " + response) : ("Selecione seu humor")}</p>
            {response ? (<p>{responses[response]}</p>) : (<></>)}
            <div>
                {Object.keys(responses).map(option => (<button key={option} style={{ backgroundColor: response == option ? "blue" : "" }} onClick={() => { selectOption(option) }}>{option}</button>))}
            </div>
            <button onClick={clear}>Limpar Seleção</button>
        </>
    )
}

export default SeletorHumor