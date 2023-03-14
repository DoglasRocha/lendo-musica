import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import LogoImg from "../img/Logo laranja.svg";
import Logo from "../components/Logo";
import Title from "../components/Title";
import Text from "../components/Text";
import SearchButton from "../components/SearchButton";
import MeninaNoSofa from "../img/Menina no sofa.svg";

export default function Home() {
  return (
    <MainContainer>
      <Navbar navCenter="true">
        <Logo src={LogoImg} alt="Logo do Lendo Música" />
      </Navbar>
      <Title text="Letra não encontrada" />
      <img src={MeninaNoSofa} alt="Menina no sofá" />
      <Text text="Essa música ainda não foi escrita, mas não fique triste, você pode acessar milhares de músicas realizando uma nova busca <3" />
      <SearchButton text="Nova busca"></SearchButton>
    </MainContainer>
  );
}
