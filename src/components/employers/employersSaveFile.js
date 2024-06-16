import React from "react";
import { Link } from "react-router-dom";
import "./employers.css";
import exitIcon from "../../img/exit.svg";
import createIcon from "../../img/create_icon.svg";
import updateIcon from "../../img/update_icon.svg";

function Employers() {
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
          <Link to="/employers" className="navbar__link active">
            Сотрудники
          </Link>
          <Link to="/companies" className="navbar__link">
            Компании
          </Link>
          <a href="!#" className="navbar__link">
            Штатное расписание
          </a>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>№</th>
              <th>ФИО</th>
              <th>Компания</th>
              <th>Должность</th>
              <th>Телефон</th>
              <th>Email</th>
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
              <td>Петров Пётр Иванович</td>
              <td>Билаб</td>
              <td>Разработчик</td>
              <td>+7(900)300-34-34</td>
              <td>Petrov123@gmail.ru</td>
              <td>
                <button className="table_btn_update">
                  <img src={updateIcon} alt="Update icon" />
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Иванов Андрей Олегович</td>
              <td>АО “Водосток”</td>
              <td>Директор</td>
              <td>+7(921)356-67-67</td>
              <td>IvanoA@gmail.ru</td>
              <td>
                <button className="table_btn_update">
                  <img src={updateIcon} alt="Update icon" />
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Васильева Анна Владимировна</td>
              <td>Билаб</td>
              <td>Разработчик</td>
              <td>+7(931)800-78-90</td>
              <td>Anna19873@mail.ru</td>
              <td>
                <button className="table_btn_update">
                  <img src={updateIcon} alt="Update icon" />
                </button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Андреев Иван Николаевич</td>
              <td>Билаб</td>
              <td>Бизнес - аналитик</td>
              <td>+7(915)340-90-12</td>
              <td>AndrIvaN@yandex.ru</td>
              <td>
                <button className="table_btn_update">
                  <img src={updateIcon} alt="Update icon" />
                </button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Смирнов Алексей Петрович</td>
              <td>Билаб</td>
              <td>Разработчик</td>
              <td>+7(954)678-56-11</td>
              <td>Alex45@gmail.ru</td>
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

export default Employers;
