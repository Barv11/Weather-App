import React from "react";
import Card from "../Card/Card.jsx";
import s from "./Cards.module.css";

export default function Cards({ cities, onClose, id }) {
  if (cities.length) {
    return (
      <main className={s.containerCards}>
        {cities.map((c) => (
          <Card
            key={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
          />
        ))}
      </main>
    );
  } else {
    return (
      <main className={s.notFound}>
        <h1>Comience a buscar las ciudades de su interés.</h1>
      </main>
    );
  }
}
