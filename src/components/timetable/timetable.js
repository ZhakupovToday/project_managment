import React from "react";
import { Link } from "react-router-dom";
import "./timetable.css";
import exitIcon from "../../img/exit.svg";
import createIcon from "../../img/create_icon.svg";
import updateIcon from "../../img/update_icon.svg";

function TimeTable() {
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
          <Link to="/companies" className="navbar__link">
            Компании
          </Link>
          <Link to="/timetable" className="navbar__link active">
            Штатное расписание
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>№</th>
              <th>Должность</th>
              <th>Штатная единица</th>
              <th>Оклад (руб)</th>
              <th>Надбавка (руб)</th>
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
              <td>Директор</td>
              <td>1</td>
              <td>60 000</td>
              <td>7 000</td>
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
              <td>Разработчик</td>
              <td>5</td>
              <td>45 000</td>
              <td>5 000</td>
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
              <td>Бизнес-аналитик</td>
              <td>1</td>
              <td>40 000</td>
              <td>4 500</td>
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
              <td>Тестировщик</td>
              <td>2</td>
              <td>37 000</td>
              <td>4 000</td>
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
              <td>Дизайнер</td>
              <td>1</td>
              <td>40 000</td>
              <td>4 500</td>
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

export default TimeTable;
