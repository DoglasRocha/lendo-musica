import React from "react";
import "../css/basic-items.css";

export default function SearchButton({ text, action, lupa, customClass }) {
  return (
    <button className={"button " + customClass} onClick={action}>
      <img src={lupa} alt="Lupinha" className="lupa" />
      &emsp;
      {text}
    </button>
  );
}
