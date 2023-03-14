import React from 'react';
import "../css/basic-items.css";

export default function NavText({text, customClass, href}) {
    return <a 
        href={href} 
        className={"nav-text " + customClass}>
        {text}
    </a>
}
