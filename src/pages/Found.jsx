import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import LogoImg from "../img/Logo laranja.svg";
import Logo from "../components/Logo";
import Title from "../components/Title";
import Text from "../components/Text";
import SearchButton from "../components/SearchButton";
import Card from "../components/Card";
import Lupa from "../img/Lupa.svg";
import { SetGradientBg } from "../features/ChangeBgColor";
import { redirectToHome } from "../features/Redirects";
import { getSongFromLocalStorage } from "../features/Songs";

export default function Found() {
  SetGradientBg();

  const song = getSongFromLocalStorage();

  return (
    <MainContainer>
      <Navbar navCenter="true">
        <Logo src={LogoImg} alt="Logo do Lendo Música" />
      </Navbar>
      <Title text="Letra encontrada" />
      <Card artist={song.art.name} song={song.mus[0].name} href="/lyric" />
      <Text text="Não encontrou o que procurava?" className="not-found-text" />
      <SearchButton text="Nova busca" lupa={Lupa} action={redirectToHome} />
    </MainContainer>
  );
}
