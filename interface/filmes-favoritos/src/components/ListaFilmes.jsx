import { useContext } from "react";
import FilmesContext from "../context/FilmesContext";
function ListaFilmes() {
    const {
        adicionarFavorito,
        estaNosFavoritos,
    } = useContext(FilmesContext);
    const filmes = [
        {
            id: 1,
            titulo: "Interestelar",
            genero: "Ficção científica",
        },
        {
            id: 2,
            titulo: "Divertida Mente",
            genero: "Animação",
        },
        {
            id: 3,
            titulo: "Pantera Negra",
            genero: "Ação",
        },
        {
            id: 4,
            titulo: "Oppenheimer",
            genero: "Drama",
        },
    ];
    return (
        <section>
            <h2>Filmes disponíveis</h2>
            {filmes.map((filme) => {
                let favorito = estaNosFavoritos(filme.id);
                return (
                    <div
                        key={filme.id}
                        style={{
                            border: "1px solid #cccccc",
                            borderRadius: "8px",
                            marginBottom: "10px",
                            padding: "15px",
                        }}
                    >
                        <h3>{filme.titulo}</h3>
                        <p>Gênero: {filme.genero}</p>
                        <button
                            onClick={() => adicionarFavorito(filme)}
                            disabled={favorito}
                        >
                            {favorito
                                ? "Adicionado aos favoritos"
                                : "Adicionar aos favoritos"}
                        </button>
                    </div>
                );
            })}
        </section>
    );
}
export default ListaFilmes;