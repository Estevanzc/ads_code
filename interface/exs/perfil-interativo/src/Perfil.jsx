import { useEffect, useState } from "react"

function Perfil() {
    let [following, setFollowing] = useState(false)

    useEffect(() => {
        console.log("Componente Perfil montado");
        return () => {
            console.log("Componente Perfil desmontado");
        }
    }, [])
    useEffect(() => {
        console.log(`O valor atual de following é: ${following}`);
    }, [following])
    return (
        <>
            <div>
                <p>Nome: Estevan Zimermann</p>
                <p>Análise de Desenvolvimento de Sistemas</p>
                <p>Tecnologia favorita: Laravel</p>
                <button onClick={() => setFollowing(!following)}>{following ? "Seguindo" : "Seguir"}</button>
            </div>
        </>
    )
}

export default Perfil