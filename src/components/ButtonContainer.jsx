import React from "react";
import "../css/basic-items.css";

export default function ButtonContainer({ children }) {
  return <section className="container button-container">{children}</section>;
}
