import { useContext } from "react";
import FilmesContext from "../context/FilmesContext";
function MeusFavoritos() {
    const {
        favoritos,
        removerFavorito,
    } = useContext(FilmesContext);
    return (
        <section>
            <h2>Meus favoritos</h2>
            {favoritos.length === 0 ? (
                <p>Nenhum filme foi adicionado aos favoritos.</p>
            ) : (
                <ul>
                    {favoritos.map((filme) => (
                        <li
                            key={filme.id}
                            style={{ marginBottom: "10px" }}
                        >
                            <strong>{filme.titulo}</strong>
                            {" - "}
                            {filme.genero}
                            <button
                                onClick={() => removerFavorito(filme.id)}
                                style={{ marginLeft: "10px" }}
                            >
                                Remover
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
export default MeusFavoritos;