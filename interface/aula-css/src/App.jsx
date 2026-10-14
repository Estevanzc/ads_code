import styled from "styled-components";
// Definindo um componente estilizado
const Container = styled.div`
  background-color: lightblue;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;
// Definindo outro componente estilizado
const Titulo = styled.h1`
  color: darkblue;
  font-size: 24px;
`;
function App() {
  return (
    <Container>
      <Titulo>Olá, este é um exemplo de Styled Components!</Titulo>
    </Container>
  );
}
export default App;