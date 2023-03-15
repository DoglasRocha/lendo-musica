import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import LogoImg from "../img/Logo laranja.svg";
import Logo from "../components/Logo";
import NavText from "../components/NavText";
import Title from "../components/Title";
import Form from "../components/Form";
import "../css/home.css";
import { SetGradientBg } from "../components/ChangeBgColor";

export default function Home() {
  SetGradientBg();

  return (
    <MainContainer>
      <Navbar>
        <Logo src={LogoImg} alt="Logo do Lendo Música"></Logo>
        <NavText text="Últimas buscas" customClass="history" href="" />
      </Navbar>
      <Title text="Buscar letra" />
      <Form />
    </MainContainer>
  );
}
