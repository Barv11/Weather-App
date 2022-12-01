import React, { useState } from "react";
import s from "./searchbar.module.css";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(input);
        setInput("");
      }}
      className={s.form}
    >
      <input
        className={s.inputadd}
        type="text"
        placeholder="Ciudad..."
        onChange={handleInput}
        value={input}
      />
      <input className={s.inputbtn} type="submit" value="Buscar" />
    </form>
  );
}
