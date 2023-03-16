import React from "react";
import "../css/basic-items.css";

export default function NavText({ text, href, action, customClass = "" }) {
  return (
    <a href={href} className={"nav-text " + customClass} onClick={action}>
      {text}
    </a>
  );
}
