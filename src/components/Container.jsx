import React from "react";
import "../css/basic-items.css";

export default function Container({ children }) {
  return <section className="main-container">{children}</section>;
}
