import React from "react";
import "../css/basic-items.css";
import Lupa from "../img/Lupa.svg";

export default function SearchButton({ text, action }) {
  return (
    <button className="button" onClick={action}>
      <img src={Lupa} alt="Lupinha" className="lupa" />
      &emsp;
      {text}
    </button>
  );
}
