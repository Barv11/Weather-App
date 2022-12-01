import React, { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards.jsx";
import Nav from "../components/Nav/Nav";
import InfoCard from "../components/InfoCard/InfoCard.jsx";
import About from "../components/About/About.jsx";
import Modal from "../components/Modals/Modal.jsx";
import { useModal } from "../components/Modals/useModal.js";
import { Route, HashRouter as Router } from "react-router-dom";

export default function App() {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState({});
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModal3, openModal3, closeModal3] = useModal(false);

  const storageCities = JSON.parse(window.localStorage.getItem("cities"));
  const apikey = "c068bde6e3f1fbc81615178f7b403bec";

  function onSearch(city) {
    for (let c of cities) {
      if (c.name.toLowerCase() === city.toLowerCase()) {
        openModal();
        return;
      }
    }

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&appid=${apikey}&units=metric`
    )
      .then((r) => r.json())
      .then((rjson) => {
        if (rjson.main !== undefined) {
          const city = {
            min: Math.round(rjson.main.temp_min),
            max: Math.round(rjson.main.temp_max),
            img: rjson.weather[0].icon,
            id: rjson.id,
            wind: rjson.wind.speed,
            temp: rjson.main.temp,
            name: rjson.name,
            weather: rjson.weather[0].main,
            clouds: rjson.clouds.all,
            latitude: rjson.coord.lat,
            longitude: rjson.coord.lon,
          };
          setCities((oldCities) => [...oldCities, city]);
        } else {
          openModal2();
        }
      })
      .catch((e) => console.log(e));
  }

  function onSearchById(id) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?id=${id}&lang=es&appid=${apikey}&units=metric`
    )
      .then((r) => r.json())
      .then((data) => {
        const city = {
          min: Math.round(data.main.temp_min),
          max: Math.round(data.main.temp_max),
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          img: data.weather[0].icon,
          id: data.id,
          weather_des: data.weather[0].description,
          weather_main: data.weather[0].main,
          wind: data.wind.speed,
          temp: data.main.temp,
          name: data.name,
          clouds: data.clouds.all,
          latitude: data.coord.lat,
          longitude: data.coord.lon,
        };
        setCity(city);
        return;
      })
      .catch((e) => console.log(e));
  }

  function onClose(id) {
    setCities((prev) => prev.filter((el) => el.id !== id));
    openModal3();
  }

  useEffect(() => {
    window.localStorage.setItem("cities", JSON.stringify([...cities]));
  }, [cities]);

  useEffect(() => {
    setCities(storageCities);
  }, []);

  return (
    <Router>
      <Route path="/">
        <Nav onSearch={onSearch} />
        <Modal isOpen={isOpenModal} closeModal={closeModal}>
          <h1>Esa ciudad ya existe.</h1>
        </Modal>
        <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
          <h1>Ingrese una ciudad válida</h1>
        </Modal>
      </Route>

      <Route exact path="/">
        <Cards cities={cities} onClose={onClose} />
        <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
          <h1>La ciudad ha sido eliminada.</h1>
        </Modal>
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/ciudad/:id">
        <InfoCard onSearchById={onSearchById} city={city} setCity={setCity} />
      </Route>
    </Router>
  );
}
