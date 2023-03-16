import React from "react";
import "../css/basic-items.css";

export default function Text({ text, customClass = "" }) {
  return <p className={"plain-text " + customClass}>{text}</p>;
}
