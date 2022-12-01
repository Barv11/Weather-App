import React from "react";
import s from "./card.module.css";
import { Link } from "react-router-dom";

export default function Card({ max, min, name, img, onClose, id }) {
  return (
    <section className={s.container}>
      <Link className={s.link} to={`/ciudad/${id}`}>
        <h1>{name}</h1>
        <div className={s.dates}>
          <span>
            <b>Min</b> <br /> {min}
          </span>
          <span>
            <b>Max</b> <br /> {max}
          </span>
          <img
            src={`http://openweathermap.org/img/wn/${img}@2x.png `}
            alt={name}
          />
        </div>
      </Link>
      <button className={s.closer} onClick={onClose}>
        X
      </button>
    </section>
  );
}
