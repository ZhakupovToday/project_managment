import React from "react";
import { Link } from "react-router-dom";
import "./projects.css";
import exitIcon from "../../img/exit.svg";
import createIcon from "../../img/create_icon.svg";
import updateIcon from "../../img/update_icon.svg";

function Projects() {
  return (
    <div className="content">
      <div className="main">
        <div className="title">
          <div className="title-text">Проекты</div>
          <a href="!#" className="title-exit">
            <div className="title-exit__text">Выход</div>
            <img className="title-exit__img" src={exitIcon} alt="exit" />
          </a>
        </div>
        <div className="create_project">Создать проект</div>
        <input type="text" className="find_project" placeholder="Поиск" />
        <table className="table2">
          <thead>
            <tr>
              <th>№</th>
              <th>Название</th>
              <th>Описание</th>
              <th>Бюджет</th>
              <th>
                <button
                  className="table_btn_create"
                  onClick={() => window.createRow()}
                >
                  <img src={createIcon} alt="Create icon" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Разработка приложения</td>
              <td>Разработка приложения для АО "Водосток"</td>
              <td>500 000.00</td>
              <td>
              <Link to="/stages" className="navbar__link">
              <button className="table_btn_update"
                >
                  <img src={updateIcon} alt="Update icon" />
                </button>
              </Link>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Разработка для Билаб</td>
              <td>Разработка модуля анализа поданного количества воды</td>
              <td>350 000.00</td>
              <td>
                <button
                  onClick={(e) => window.editRow(e.target.closest("tr"), 1)}
                  className="table_btn_update"
                >
                  <img src={updateIcon} alt="Update icon" />
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Проект 2</td>
              <td>Описание для проекта 2</td>
              <td>750 000.00</td>
              <td>
                <button
                  onClick={(e) => window.editRow(e.target.closest("tr"), 2)}
                  className="table_btn_update"
                >
                  <img src={updateIcon} alt="Update icon" />
                </button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Проект 6</td>
              <td>Описание для проекта 6</td>
              <td>600 000.00</td>
              <td>
                <button
                  onClick={(e) => window.editRow(e.target.closest("tr"), 3)}
                  className="table_btn_update"
                >
                  <img src={updateIcon} alt="Update icon" />
                </button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Разработка</td>
              <td>Разработать системный модуль</td>
              <td>1 150 000.00</td>
              <td>
                <button
                  onClick={(e) => window.editRow(e.target.closest("tr"), 4)}
                  className="table_btn_update"
                >
                  <img src={updateIcon} alt="Update icon" />
                </button>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Проектирование</td>
              <td>Спроектировать архитектуру приложения управления проектами</td>
              <td>200 000.00</td>
              <td>
                <button
                  onClick={(e) => window.editRow(e.target.closest("tr"), 4)}
                  className="table_btn_update"
                >
                  <img src={updateIcon} alt="Update icon" />
                </button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Projects;
