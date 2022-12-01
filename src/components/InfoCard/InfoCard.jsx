import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import {
  UilTemperature,
  UilRaindropsAlt,
  UilWind,
  UilCompass,
  UilClouds,
  UilGlobe,
} from "@iconscout/react-unicons";
import s from "./infoCard.module.css";
import Fact from "./Fact/Fact";

export default function InfoCard({ setCity, onSearchById, city }) {
  const { id } = useParams();

  const facts = [
    { sub: "Temperatura: ", icon: <UilTemperature />, value: `${city.temp} ºC` },
    {
      sub: "Humedad: ",
      icon: <UilRaindropsAlt />,
      value: `${city.humidity}%`,
    },
    {
      sub: "Viento: ",
      icon: <UilWind />,
      value: `${city.wind} m/s`,
    },
    {
      sub: "Presión: ",
      icon: <UilCompass />,
      value: `${city.pressure} hPa`,
    },
    {
      sub: "Cantidad de nubes: ",
      icon: <UilClouds />,
      value: `${city.clouds}`,
    },
    {
      sub: "Clima: ",
      value: `${city.weather_main}`,
    },
    {
      sub: "Latitud: ",
      icon: <UilGlobe />,
      value: `${city.latitude}º`,
    },
    {
      sub: "Longitud: ",
      icon: <UilGlobe />,
      value: `${city.longitude}º`,
    },
    {
      sub: "Descripción: ",
      value: `${city.weather_des}`,
    },
  ];

  useEffect(() => {
    onSearchById(id);
  }, [id]);
  useEffect(() => {
    return () => setCity({});
  }, []);
  return (
    <section className={s.container}>
      {Object.entries(city).length ? (
        <div className={s.info}>
          <h1>{city.name}</h1>
          <div className={s.facts}>
            {facts.map((el) => (
              <Fact sub={el.sub} icon={el.icon} value={el.value} />
            ))}
          </div>
          <img
            src={`http://openweathermap.org/img/wn/${city.img}@2x.png `}
            alt={city.name}
          />
        </div>
      ) : (
        <Loader />
      )}
    </section>
  );
}
