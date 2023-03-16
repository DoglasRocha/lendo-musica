import React, { useState } from "react";
import SearchButton from "./SearchButton";
import Container from "./Container";
import Lupa from "../img/Lupa.svg";
import ButtonContainer from "./ButtonContainer";

import "../css/basic-items.css";

const getURL = (artist, song) => {
  const key = "660a4395f992ff67786584e238f501aa";
  return `https://api.vagalume.com.br/search.php?apikey=${key}&art=${artist}&mus=${song}`;
};

const handleFormSubmission = async (formInfo) => {
  const requestURL = getURL(formInfo.artist, formInfo.song);

  let request = await fetch(requestURL);
  request = await request.json();

  if (request.type === "exact") {
    let history = JSON.parse(localStorage.getItem("songHistory"));
    if (history === undefined) history = [];
    history.push(formInfo);
    localStorage.setItem("songHistory", JSON.stringify(history));

    localStorage.setItem("requestedSong", JSON.stringify(request));
    window.location.href = "/lyric";
  } else {
    window.location.href = "/notfound";
  }
};

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
