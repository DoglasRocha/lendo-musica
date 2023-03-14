import Container from "../components/Container";
import Navbar from "../components/Navbar";
import LogoImg from "../img/Logo laranja.svg";
import Logo from "../components/Logo";
import NavText from "../components/NavText";
import Title from "../components/Title";
import Form from "../components/Form";
import "../css/home.css";

export default function Home() {
  return (
    <Container>
      <Navbar>
        <Logo src={LogoImg} alt="Logo do Lendo Música"></Logo>
        <NavText text="Últimas buscas" customClass="history" href="" />
      </Navbar>
      <Title text="Buscar letra" />
      <Form />
    </Container>
  );
}
