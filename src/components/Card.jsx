import React from "react";
import Text from "./Text";
import "../css/card.css";

export default function Card({ artist, song, href }) {
  return (
    <a className="card" href={href}>
      <Text text={artist} customClass="artist" />
      <Text text={song} customClass="song" />
    </a>
  );
}
