import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { NavLink } from "react-router-dom";
import s from "./nav.module.css";

export default function Nav({ onSearch }) {
  return (
    <nav className={s.container}>
      <div className={s.izq}>
        <img src="logo192.png" alt="weather" />

        <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
          Inicio
        </NavLink>

        <NavLink to="/about" className={s.link} activeClassName={s.activeLink}>
          sobre mí
        </NavLink>
      </div>

      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
