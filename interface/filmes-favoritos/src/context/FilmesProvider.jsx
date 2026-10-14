import { useState } from "react";
import FilmesContext from "./FilmesContext";
function FilmesProvider({ children }) {
    const [favoritos, setFavoritos] = useState([]);
    // Adiciona um filme à lista de favoritos
    const adicionarFavorito = (filme) => {
        const filmeJaAdicionado = favoritos.some(
            (item) => item.id === filme.id
        );
        if (!filmeJaAdicionado) {
            setFavoritos([...favoritos, filme]);
        }
    };
    // Remove um filme da lista de favoritos
    const removerFavorito = (filmeId) => {
        const novaLista = favoritos.filter(
            (item) => item.id !== filmeId
        );
        setFavoritos(novaLista);
    };

    const estaNosFavoritos = (filmeId) => {
        return favoritos.some((item) => item.id === filmeId);
    };
    return (
        <FilmesContext.Provider
            value={{
                favoritos,
                adicionarFavorito,
                removerFavorito,
                estaNosFavoritos,
            }}
        >
            {children}
        </FilmesContext.Provider>
    );
}
export default FilmesProvider;