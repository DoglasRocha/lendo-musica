import React from "react";
import SearchButton from "./SearchButton";
import Container from "./Container";
import ButtonContainer from "./ButtonContainer";

import "../css/basic-items.css";

export default function Form() {
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
      />
      <label htmlFor="songName" className="form-label">
        Música
      </label>
      <input
        type="text"
        name="songName"
        placeholder="Insira o nome da música"
        className="form-field"
      />
      <ButtonContainer>
        <SearchButton text="Buscar" />
      </ButtonContainer>
    </Container>
  );
}
