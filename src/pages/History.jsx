import { useState } from "react";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import NavText from "../components/NavText";
import Title from "../components/Title";
import Button from "../components/Button";
import SearchButton from "../components/SearchButton";
import Container from "../components/Container";
import LogoImg from "../img/Logo laranja.svg";
import Lupa from "../img/Lupa.svg";
import "../css/history.css";
import { SetGradientBg } from "../features/ChangeBgColor";
import {
  clearSongHistory,
  getSongFromHistory,
  handleFormSubmission,
} from "../features/Songs";
import { redirectToHome } from "../features/Redirects";

export default function History() {
  SetGradientBg();

  const [history, setHistory] = useState(getSongFromHistory());

  const clearHistory = () => {
    clearSongHistory();
    setHistory(getSongFromHistory());
  };

  return (
    <MainContainer>
      <Navbar>
        <Logo src={LogoImg} alt="Logo do Lendo Música" />
        <NavText
          text="Limpar histórico X"
          customClass="clear-history"
          action={clearHistory}
        />
      </Navbar>
      <Title text="Histórico" />
      <Container>
        {history.map(({ artist, song }) => {
          return (
            <Button
              text={`${artist} - ${song}`}
              action={() =>
                handleFormSubmission({ artist: artist, song: song })
              }
            />
          );
        })}
        <SearchButton text="Nova busca" lupa={Lupa} action={redirectToHome} />
      </Container>
    </MainContainer>
  );
}
