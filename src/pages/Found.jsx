import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import LogoImg from "../img/Logo laranja.svg";
import Logo from "../components/Logo";
import Title from "../components/Title";
import Text from "../components/Text";
import SearchButton from "../components/SearchButton";
import Card from "../components/Card";

export default function Home() {
  return (
    <MainContainer>
      <Navbar navCenter="true">
        <Logo src={LogoImg} alt="Logo do Lendo Música" />
      </Navbar>
      <Title text="Letra encontrada" />
      <Card artist="Eminem" song="Rap God" />
      <Text text="Não encontrou o que procurava?" className="not-found-text" />
      <SearchButton text="Nova busca" />
    </MainContainer>
  );
}
