import { useState } from "react"

function Registration() {
    let [name, setName] = useState("")
    let [response, setResponse] = useState(-1)

    function formSubmit(e) {
        e.preventDefault()
        if (!name.trim()) {
            setResponse(1)
            return
        }
        setResponse(2)
    }

    return (
    <form action="" onSubmit={(e) => formSubmit(e)} className="w-1/3 bg-slate-200 py-15 px-10 flex justify-start items-center flex-col gap-y-3">
        <h1 className="text-3xl font-bold pb-12">Inscreva-se na Jornada Acadêmica</h1>
        <input className="w-full px-3 py-2 bg-white border-1 border-solid border-gray-500 rounded-sm outline-none" type="text" placeholder="Digite seu nome" value={name} onChange={(e) => {setName(e.target.value); setResponse(-1)}} />
        <button type="submit" className="py-2.5 bg-green-600 w-full text-white font-medium rounded-sm cursor-pointer hover:bg-green-700">Inscrever-se</button>
        {response > -1 && <p className="text-xl font-bold text-red-700">{response == 1 ? ("Por favor, digite seu nome.") : (`Inscrito com sucesso! Bem-vindo(a), ${name}!`)}</p>}
    </form>
    )
}

export default Registration