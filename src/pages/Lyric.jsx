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
import { SetLightBg } from "../features/ChangeBgColor";
import { redirectToHome } from "../features/Redirects";

export default function Lyric() {
  SetLightBg();

  const song = JSON.parse(localStorage.getItem("requestedSong"));
  const lyric = song.mus[0].text.split("\n");

  return (
    <MainContainer>
      <Navbar>
        <Logo src={LogoImg} alt="Logo do Lendo Música" />
        <HorizontalContainer>
          <img src={Seta} alt="Seta de navegação" />
          &emsp;
          <NavText
            text="Voltar para a busca"
            href={"/"}
            customClass="nav-text-blue"
          />
        </HorizontalContainer>
      </Navbar>
      <Title text={song.mus[0].name} customClass="main-title" />
      <br />
      <div>
        {lyric.map((line) => (
          <Text text={line} customClass="lyric" />
        ))}
      </div>
      <br />
      <Text text="Curtiu? Busque mais letras" customClass="liked" />
      <br />
      <SearchButton
        text="Nova busca"
        customClass="blue-button"
        lupa={LupaBranca}
        action={redirectToHome}
      />
    </MainContainer>
  );
}
