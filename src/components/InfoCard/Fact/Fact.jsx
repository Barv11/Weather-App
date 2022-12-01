import React from "react";
import s from "./Fact.module.css";

export default function Fact({ sub, icon, value }) {
  return (
    <>
      <span className={s.fact}>
        {icon ? icon : null}
        {sub ? sub : null}
        {value ? value : null}
      </span>
    </>
  );
}
