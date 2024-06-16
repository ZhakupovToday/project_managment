import React, { useEffect } from "react";
import "./employers.css";
import createIcon from "../../img/create_icon.svg";
import updateIcon from "../../img/update_icon.svg";
import exitIcon from "../../img/exit.svg";

function Employers() {

  

  useEffect(() => {
    window.editRow = function (row, rowIndex) {
      var modal = document.getElementById("myModal");
      if (!modal) return;

      var modalContent = modal.getElementsByClassName("modal-content")[0];
      if (!modalContent) return;

      var tableHeaders = document
        .querySelector(".table thead tr")
        .getElementsByTagName("th");
      if (!tableHeaders) return;

      var modalHTML = "<table class='table_popup'>";
      for (var i = 0; i < tableHeaders.length - 1; i++) {
        modalHTML +=
          "<tr><td>" +
          tableHeaders[i].innerText +
          "</td><td><input type='text' value='" +
          row.cells[i].innerText +
          "' style='font-size: 30px'></td></tr>";
      }
      modalHTML +=
        "<tr><td colspan='2'><button onclick='saveChanges(this, " +
        rowIndex +
        ")' style='font-size: 30px'>Сохранить</button></td></tr>";

      modalHTML +=
        "<tr><td colspan='2'><button onclick='deleteRow(" +
        rowIndex +
        ")' style='font-size: 30px; background-color: red; color: white;'>Удалить запись</button></td></tr>";

      modalHTML += "</table>";
      modalContent.innerHTML = modalHTML;

      modal.style.display = "block";

      var closeButton = modal.getElementsByClassName("close")[0];
      if (closeButton) {
        closeButton.onclick = function () {
          modal.style.display = "none";
        };
      }
    };

    window.saveChanges = function (button, rowIndex) {
      var modal = button.closest(".modal");
      if (!modal) return;

      var inputs = modal.getElementsByTagName("input");
      var rowData = document.querySelector(".table tbody").rows[rowIndex];

      for (var i = 0; i < inputs.length; i++) {
        rowData.cells[i].innerText = inputs[i].value;
      }

      modal.style.display = "none";
    };

    window.deleteRow = function (rowIndex) {
      var modal = document.getElementById("myModal");
      if (!modal) return;

      var table = document.querySelector(".table tbody");
      table.deleteRow(rowIndex);

      // Обновляем индексы оставшихся строк
      for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].cells[table.rows[i].cells.length - 1].innerHTML =
          "<button onclick='editRow(this.parentNode.parentNode, " +
          i +
          ")' class='table_btn_update'><img src='" +
          updateIcon +
          "' alt='Update icon'></button>";
      }

      modal.style.display = "none";
    };

    window.createRow = function () {
      var modal = document.getElementById("myModal");
      if (!modal) return;

      var modalContent = modal.getElementsByClassName("modal-content")[0];
      if (!modalContent) return;

      var tableHeaders = document
        .querySelector(".table thead tr")
        .getElementsByTagName("th");
      if (!tableHeaders) return;

      var modalHTML = "<table class='table_popup'>";
      for (var i = 0; i < tableHeaders.length - 1; i++) {
        modalHTML +=
          "<tr><td>" +
          tableHeaders[i].innerText +
          "</td><td><input type='text' value='' style='font-size: 30px'></td></tr>";
      }
      modalHTML +=
        "<tr><td colspan='2'><button onclick='saveNewRow()' style='font-size: 30px'>Сохранить</button></td></tr>";

      modalHTML += "</table>";
      modalContent.innerHTML = modalHTML;

      modal.style.display = "block";

      var closeButton = modal.getElementsByClassName("close")[0];
      if (closeButton) {
        closeButton.onclick = function () {
          modal.style.display = "none";
        };
      }
    };

    window.saveNewRow = function () {
      var modal = document.getElementById("myModal");
      if (!modal) return;

      var inputs = modal.getElementsByTagName("input");
      var table = document.querySelector(".table tbody");
      var newRow = document.createElement("tr");

      for (var i = 0; i < inputs.length; i++) {
        var cell = document.createElement("td");
        cell.innerText = inputs[i].value;
        newRow.appendChild(cell);
      }

      var editCell = document.createElement("td");
      editCell.innerHTML =
        "<button onclick='editRow(this.parentNode.parentNode, " +
        table.rows.length +
        ")' class='table_btn_update'><img src='" +
        updateIcon +
        "' alt='Update icon'></button>";
      newRow.appendChild(editCell);

      table.appendChild(newRow);

      modal.style.display = "none";
    };
  }, []);

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
          <a href="!#" className="navbar__link active">
            Сотрудники
          </a>
          <a href="/companies" className="navbar__link">
            Компании
          </a>
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
              <td>Петров Пётр Иванович</td>
              <td>Билаб</td>
              <td>Разработчик</td>
              <td>+7(900)300-34-34</td>
              <td>Petrov123@gmail.ru</td>
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
              <td>Иванов Андрей Олегович</td>
              <td>АО “Водосток”</td>
              <td>Директор</td>
              <td>+7(921)356-67-67</td>
              <td>IvanoA@gmail.ru</td>
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
              <td>Васильева Анна Владимировна</td>
              <td>Билаб</td>
              <td>Разработчик</td>
              <td>+7(931)800-78-90</td>
              <td>Anna19873@mail.ru</td>
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
              <td>Андреев Иван Николаевич</td>
              <td>Билаб</td>
              <td>Бизнес - аналитик</td>
              <td>+7(915)340-90-12</td>
              <td>AndrIvaN@yandex.ru</td>
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
              <td>Казакова Елена Сергеевна</td>
              <td>AO “Лето”</td>
              <td>Стажёр</td>
              <td>+7(958)789-34-90</td>
              <td>ElenaKazakova@gmail.ru</td>
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

        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employers;


