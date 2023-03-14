import React from 'react';
import "../css/basic-items.css"

export default function Logo({src, alt}) {
    return <a href="http://localhost:3000/">
        <img src={src} alt={alt} className="logo"/>
    </a> 
}