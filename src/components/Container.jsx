import React from "react";
import "../css/basic-items.css";

export default function Container({ children }) {
  return <section className="container">{children}</section>;
}
