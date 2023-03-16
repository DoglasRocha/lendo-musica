import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import LogoImg from "../img/Logo laranja.svg";
import Logo from "../components/Logo";
import Title from "../components/Title";
import Text from "../components/Text";
import SearchButton from "../components/SearchButton";
import Lupa from "../img/Lupa.svg";
import MeninaNoSofa from "../img/Menina no sofa.svg";
import { SetGradientBg } from "../features/ChangeBgColor";

const redirectToHome = () => {
  window.location.href = "/";
};

export default function Home() {
  SetGradientBg();

  return (
    <MainContainer>
      <Navbar navCenter="true">
        <Logo src={LogoImg} alt="Logo do Lendo Música" />
      </Navbar>
      <Title text="Letra não encontrada" />
      <img src={MeninaNoSofa} alt="Menina no sofá" />
      <Text text="Essa música ainda não foi escrita, mas não fique triste, você pode acessar milhares de músicas realizando uma nova busca <3" />
      <SearchButton text="Nova busca" lupa={Lupa} action={redirectToHome} />
    </MainContainer>
  );
}
