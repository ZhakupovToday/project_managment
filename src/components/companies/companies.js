import React from "react";
import { Link } from "react-router-dom";
import "./companies.css";
import exitIcon from "../../img/exit.svg";
import createIcon from "../../img/create_icon.svg";
import updateIcon from "../../img/update_icon.svg";

function Companies() {
  return (
    <div className="content">
      <div className="main">
        <div className="title">
          <div className="title-text">Справочник</div>
          <a href="!#" className="title-exit">
            <div className="title-exit__text">Выход</div>
            <img className="title-exit__img" src={exitIcon} alt="exit" />
          </a>
        </div>
        <div className="navbar">
          <Link to="/employers" className="navbar__link">
            Сотрудники
          </Link>
          <Link to="/companies" className="navbar__link active">
            Компании
          </Link>
          <Link to="/timetable" className="navbar__link">
            Штатное расписание
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>№</th>
              <th>Компания</th>
              <th>Телефон</th>
              <th>
                <button className="table_btn_create">
                  <img src={createIcon} alt="Create_icon" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Билаб</td>
              <td>+7(900)300-34-34</td>
              <td>
                <button className="table_btn_update">
                  <img src={updateIcon} alt="Update icon" />
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>АО “Водосток”</td>
              <td>+7(921)356-67-67</td>
              <td>
                <button className="table_btn_update">
                  <img src={updateIcon} alt="Update icon" />
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Стереотек</td>
              <td>+7(931)800-78-90</td>
              <td>
                <button className="table_btn_update">
                  <img src={updateIcon} alt="Update icon" />
                </button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>ООО Волга</td>
              <td>+7(915)340-90-12</td>
              <td>
                <button className="table_btn_update">
                  <img src={updateIcon} alt="Update icon" />
                </button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>ЦМИТ ЛЮКС</td>
              <td>+7(954)678-56-11</td>
              <td>
                <button className="table_btn_update">
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

export default Companies;
