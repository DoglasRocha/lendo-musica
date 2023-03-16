import React, { useState } from "react";
import SearchButton from "./SearchButton";
import Container from "./Container";
import Lupa from "../img/Lupa.svg";
import ButtonContainer from "./ButtonContainer";
import { handleFormSubmission } from "../features/Songs";

import "../css/basic-items.css";

export default function Form() {
  const [formInfo, setFormInfo] = useState({ artist: "", song: "" });

  return (
    <Container>
      <label htmlFor="artistName" className="form-label">
        Artista
      </label>
      <input
        type="text"
        name="artistName"
        placeholder="Insira o nome do artista"
        className="form-field"
        value={formInfo.artist}
        onChange={(e) =>
          setFormInfo({
            artist: e.target.value,
            song: formInfo.song,
          })
        }
      />
      <label htmlFor="songName" className="form-label">
        Música
      </label>
      <input
        type="text"
        name="songName"
        placeholder="Insira o nome da música"
        className="form-field"
        value={formInfo.song}
        onChange={(e) =>
          setFormInfo({
            artist: formInfo.artist,
            song: e.target.value,
          })
        }
      />
      <br />
      <br />
      <br />
      <ButtonContainer>
        <SearchButton
          text="Buscar"
          lupa={Lupa}
          action={() => {
            handleFormSubmission(formInfo);
          }}
        />
      </ButtonContainer>
    </Container>
  );
}
