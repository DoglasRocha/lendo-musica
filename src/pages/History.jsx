import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import NavText from "../components/NavText";
import Title from "../components/Title";
import Button from "../components/Button";
import SearchButton from "../components/SearchButton";
import Container from "../components/Container";
import LogoImg from "../img/Logo laranja.svg";
import "../css/history.css";

export default function Home() {
  return (
    <MainContainer>
      <Navbar>
        <Logo src={LogoImg} alt="Logo do Lendo Música" />
        <NavText
          text="Limpar histórico X"
          customClass="clear-history"
          href=""
        />
      </Navbar>
      <Title text="Histórico" />
      <Container>
        <Button text="teste 1 - 0" />
        <Button text="teste 1 - 0" />
        <Button text="teste 1 - 0" />
        <Button text="teste 1 - 0" />
        <Button text="teste 1 - 0" />
        <SearchButton text="Nova busca" />
      </Container>
    </MainContainer>
  );
}
