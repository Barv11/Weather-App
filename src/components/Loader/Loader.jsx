import s from "./Loader.module.css";

import React from "react";

export default function Loader() {

  function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

  const num = random(0, 2)

  const textos = [
    'Revisando las nubes...',
    "Tomando datos del clima...",
    "Revisando el cielo..."
  ]

  return (
    <div className={s.container}>
      <div className={s.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span>{textos[num]}</span>
    </div>
  );
}
