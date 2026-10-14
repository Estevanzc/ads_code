import { useContext } from "react";
import FilmesContext from "../context/FilmesContext";
function Cabecalho() {
    const { favoritos } = useContext(FilmesContext);
    return (
        <header
            style={{
                backgroundColor: "#20232a",
                color: "#ffffff",
                padding: "20px",
                textAlign: "center",
            }}
        >
            <h1>CineFavoritos</h1>
            <p>
                Quantidade de filmes favoritos: {favoritos.length}
            </p>
        </header>
    );
}
export default Cabecalho;