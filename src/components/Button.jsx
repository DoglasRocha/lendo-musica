import React from "react";
import "../css/basic-items.css";

export default function Button({ text, action }) {
  return (
    <button className="button" onClick={action}>
      {text}
    </button>
  );
}
