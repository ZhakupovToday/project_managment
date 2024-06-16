import React from "react";
import "./home.css";
import exitIcon from "../../img/exit.svg";

function Home() {

  return (
    <div class="title">
      <div class="title-text">Главная страница</div>
      <a href="!#" class="title-exit">
        <div class="title-exit__text">Выход</div>
        <img class="title-exit__img" src={exitIcon} alt="exit" />
      </a>
    </div>
  );
}

export default Home;
