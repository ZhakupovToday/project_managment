import React from "react";
// import { Link } from "react-router-dom";
import "./stages.css";
import { Link } from "react-router-dom";
import exitIcon from "../../img/exit.svg";
import createIcon from "../../img/create_icon.svg";
import updateIcon from "../../img/update_icon.svg";
import ArrowRight from "../../img/arrow_right.svg";
import PieChart from "../PieChart";

function Stages() {
  return (
    <div className="content">
      <div className="main">
        <div className="title">
        <Link to="/projects" className="navbar__link">
        <div className="title-text">&lt; Разработка приложения</div>
              </Link>
          
          <a href="!#" className="title-exit">
            <div className="title-exit__text">Выход</div>
            <img className="title-exit__img" src={exitIcon} alt="exit" />
          </a>
        </div>
        <div className="stages">
          <div className="project_description">
            <div className="description">Разработка приложения для АО”Водосток”</div>
            <div className="stages_users">
              <div className="stages_users_h1">
              <div className="stages_users_title">Участники</div>
              <img className="stages_icon" src={ArrowRight}  alt="arrow_right"/>
              </div>
              <div className="stages_users_info">
                <div className="stages_users_user">
                  <div className="stages_user">Смирнов И.А.</div>
                  <div className="stages_user">Иванов И.А.</div>
                  <div className="stages_user">Алексеев М.П.</div>
                </div>
                <div className="stages_users_role">
                  <div className="stages_user">Директор</div>
                  <div className="stages_user">Разработчик</div>
                  <div className="stages_user">Дизайнер</div>
                </div>
              </div>
            </div>
            </div>
            <div className="project_graph">
            <PieChart /> {/* Вставляем компонент с круговым графиком */}
            </div>
        
        </div>
        <input type="text" className="find_project" placeholder="Поиск" />
        <table className="table_stages">
          <thead>
            <tr>
              <th>№</th>
              <th>Название этапа</th>
              <th>Дата начала</th>
              <th>Дата конца</th>
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
              <td>Документация</td>
              <td>02.02.2024</td>
              <td>28.02.2024</td>
              <td>50 000.00</td>
              <td>
                <button
                  onClick={(e) => window.editRow(e.target.closest("tr"), 0)}
                  className="table_btn_update"
                >
                  <img src={updateIcon} alt="Update icon" />
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Бизнес-процессы</td>
              <td>29.02.2024</td>
              <td>15.03.2024</td>
              <td>50 000.00</td>
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
              <td>Разрабтка</td>
              <td>16.03.2024</td>
              <td>30.05.2024</td>
              <td>150 000.00</td>
              <td>
                <button
                  onClick={(e) => window.editRow(e.target.closest("tr"), 2)}
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

export default Stages;
