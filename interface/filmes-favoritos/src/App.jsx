import FilmesProvider from "./context/FilmesProvider";
import Cabecalho from "./components/Cabecalho";
import ListaFilmes from "./components/ListaFilmes";
import MeusFavoritos from "./components/MeusFavoritos";
function App() {
  return (
    <FilmesProvider>
      <Cabecalho />
      <main
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <ListaFilmes />
        <MeusFavoritos />
      </main>
    </FilmesProvider>
  );
}
export default App;