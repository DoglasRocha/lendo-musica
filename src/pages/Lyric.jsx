import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import NavText from "../components/NavText";
import Logo from "../components/Logo";
import Title from "../components/Title";
import Text from "../components/Text";
import SearchButton from "../components/SearchButton";
import LogoImg from "../img/Logo azul.svg";
import "../css/lyric.css";
import { SetLightBg } from "../components/ChangeBgColor";

export default function Lyric() {
  SetLightBg();
  return (
    <MainContainer>
      <Navbar>
        <Logo src={LogoImg} alt="Logo do Lendo Música" />
        <NavText text="Voltar para a busca" />
      </Navbar>
      <Title text="Rap God" />
      <Text
        text="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, doloremque maxime? Sequi excepturi iste quis reiciendis quos atque? Ea ipsam voluptates veniam hic sapiente earum provident nesciunt a in sed!"
      />
      <Text text="Curtiu? Busque mais letras" />
      <SearchButton text="Nova busca"></SearchButton>
    </MainContainer>
  );
}
