import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Logo from "../img/Logo laranja.svg";

export default function Home() {
  return (
    <Container>
      <Navbar>
        <img src={Logo} alt="Logo do Lendo Música" />
        <p>Últimas buscas</p>
      </Navbar>
    </Container>
  );
}
