import React from "react";
import "../css/basic-items.css";

export default function Form() {
  return (
    <section className="container">
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
    </section>
  );
}
