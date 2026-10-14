import { useState } from 'react';
import styles from "./App.module.css"; // Importa o CSS Module
function App() {
  // Definindo um estado para controlar o estilo condicional
  const [ativo, setAtivo] = useState(false);
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Bem-vindo ao Meu App</h1>
      <p className={styles.paragrafo}>
        Este é um exemplo simples de uso de CSS Modules com React.
      </p>
      <button
        className={`${styles.botao} ${ativo ? styles.botaoAtivo : ""}`}
        onClick={() => setAtivo(!ativo)}
      >
        {ativo ? "Ativo" : "Inativo"}
      </button>
    </div>
  );
}
export default App;