import React from "react";
import s from "./About.module.css";

export default function About() {
  return (
    <>
      <section className={s.container}>
        <section className={s.about}>
          <h1>Bryan Ramos Vargas</h1>
          <h3>Developer Full Stack</h3>
          <p>
            Mi nombre es <b>Bryan</b>, tengo 20 años, programador{" "}
            <b>Full Stack</b> curioso, apasionado por la <b>programación</b>.{" "}
            <br />
            Dispuesto a aprender, debatir soluciones, compartir conocimientos,
            afrontar nuevos retos, trabajar en equipo y tengo autonomía para
            crecer <b>profesionalmente</b>. <br />
            Me enfoco en crear experiencias <b>buenas y fluídas</b> entre el{" "}
            <b>producto y usuario</b>. <br />
            Considero que me falta mucho por crecer como <b>persona</b> y{" "}
            <b>profesional</b>, pero poco a poco apuntando hacia arriba. <br />
            Mis metas son: Apoyar a mi <b>familia</b> y vivir{" "}
            <b>haciendo lo que me gusta</b>.
          </p>
          <a
            href="https://portfolio-barv.vercel.app/#contact"
            target={"BLANK"}
            className={s.talk}
          >
            <button>Contacto</button>
          </a>
        </section>
      </section>
    </>
  );
}
