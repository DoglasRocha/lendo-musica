import React from "react";
import "../css/basic-items.css";

export default function Text({ text, className }) {
  return <p className={"plain-text " + className}>{text}</p>;
}
