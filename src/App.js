import styled from "styled-components";

function Header() {
  return <Hd>header</Hd>
}
const Hd = styled.header`
  heigth: 100px;
  background-color: #000000;`

function App() {
  return <Header />;
}

export default App;