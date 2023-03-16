import React from "react";
import "../css/basic-items.css";

export default function Title({ text, customClass = "" }) {
  return <h1 className={"title " + customClass}>{text}</h1>;
}
