import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import NavText from "../components/NavText";
import Logo from "../components/Logo";
import Title from "../components/Title";
import Text from "../components/Text";
import SearchButton from "../components/SearchButton";
import HorizontalContainer from "../components/HorizontalContainer";
import LogoImg from "../img/Logo azul.svg";
import Seta from "../img/Seta.svg";
import LupaBranca from "../img/Lupa_branco.svg";
import "../css/lyric.css";
import { SetLightBg } from "../components/ChangeBgColor";

export default function Lyric() {
  SetLightBg();
  return (
    <MainContainer>
      <Navbar>
        <Logo src={LogoImg} alt="Logo do Lendo Música" />
        <HorizontalContainer>
          <img src={Seta} alt="Seta de navegação" />
          &emsp;
          <NavText text="Voltar para a busca" customClass="nav-text-blue" />
        </HorizontalContainer>
      </Navbar>
      <Title text="Rap God" customClass="main-title" />
      <Text
        text="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, doloremque maxime? Sequi excepturi iste quis reiciendis quos atque? Ea ipsam voluptates veniam hic sapiente earum provident nesciunt a in sed!"
        customClass="lyric"
      />
      <Text text="Curtiu? Busque mais letras" customClass="liked" />
      <SearchButton
        text="Nova busca"
        customClass="blue-button"
        lupa={LupaBranca}
      ></SearchButton>
    </MainContainer>
  );
}
