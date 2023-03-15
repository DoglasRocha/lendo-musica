import React from "react";
import Text from "./Text";
import "../css/card.css";

export default function Card({ artist, song }) {
  return (
    <div className="card">
      <Text text={artist} className="artist" />
      <Text text={song} className="song" />
    </div>
  );
}