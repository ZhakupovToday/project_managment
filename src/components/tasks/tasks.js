import React, { useState } from "react";
import "./tasks.css";
import exitIcon from "../../img/exit.svg";

function Tasks() {
  const [activeTask, setActiveTask] = useState(1);

  const handleTaskClick = (taskIndex) => {
    setActiveTask(taskIndex);
  };

  return (
    <div className="content">
      <div className="main">
        <div className="title">
          <div className="title-text">Задачи</div>
          <a href="!#" className="title-exit">
            <div className="title-exit__text">Выход</div>
            <img className="title-exit__img" src={exitIcon} alt="exit" />
          </a>
        </div>
        <div className="tasks">
          <div className="tasks-projects">
            <div className="tasks-projects__title">Проекты</div>
            <div
              className={`tasks-projects__info1 ${activeTask === 1 ? "active" : ""}`}
              onClick={() => handleTaskClick(1)}
            >
              <div className="tasks-projects__info_title">Создание са...</div>
              <div className="tasks-projects__info_subtitle">8 задач</div>
            </div>
            <div
              className={`tasks-projects__info2 ${activeTask === 2 ? "active" : ""}`}
              onClick={() => handleTaskClick(2)}
            >
              <div className="tasks-projects__info_title">Разработка п...</div>
              <div className="tasks-projects__info_subtitle">13 задач</div>
            </div>
            <div
              className={`tasks-projects__info3 ${activeTask === 3 ? "active" : ""}`}
              onClick={() => handleTaskClick(3)}
            >
              <div className="tasks-projects__info_title">Создание са...</div>
              <div className="tasks-projects__info_subtitle">17 задач</div>
            </div>
            <div
              className={`tasks-projects__info4 ${activeTask === 4 ? "active" : ""}`}
              onClick={() => handleTaskClick(4)}
            >
              <div className="tasks-projects__info_title">Проверка до...</div>
              <div className="tasks-projects__info_subtitle">5 задач</div>
            </div>
          </div>
          <div className="tasks-Towork">
            <div className="tasks-Towork__title">К работе</div>
            <div className={`tasks-Towork__info_task1 ${activeTask === 1 ? "active" : ""}`}>
              <div className="tasks-Towork__info_title">Составить би...</div>
              <div className="tasks-Towork__info_subtitle">08.05.2024</div>
            </div>
            <div className={`tasks-Towork__info_task1 ${activeTask === 1 ? "active" : ""}`}>
              <div className="tasks-Towork__info_title">Протестирова...</div>
              <div className="tasks-Towork__info_subtitle">08.05.2024</div>
            </div>
            <div className={`tasks-Towork__info_task2 ${activeTask === 2 ? "active" : ""}`}>
              <div className="tasks-Towork__info_title">Подготовить ...</div>
              <div className="tasks-Towork__info_subtitle">08.05.2024</div>
            </div>
            <div className={`tasks-Towork__info_task2 ${activeTask === 2 ? "active" : ""}`}>
              <div className="tasks-Towork__info_title">Поменять нов...</div>
              <div className="tasks-Towork__info_subtitle">08.05.2024</div>
            </div>
          </div>
          <div className="tasks-Inwork">
            <div className="tasks-Inwork__title">В работе</div>
            <div className={`tasks-Inwork__info_task1 ${activeTask === 1 ? "active" : ""}`}>
              <div className="tasks-Inwork__info_title">Расписать за...</div>
              <div className="tasks-Inwork__info_subtitle">01.05.2024</div>
            </div>
            <div className={`tasks-Inwork__info_task1 ${activeTask === 1 ? "active" : ""}`}>
              <div className="tasks-Inwork__info_title">Разработать ...</div>
              <div className="tasks-Inwork__info_subtitle">01.05.2024</div>
            </div>
            <div className={`tasks-Inwork__info_task2 ${activeTask === 2 ? "active" : ""}`}>
              <div className="tasks-Inwork__info_title">Отправить за...</div>
              <div className="tasks-Inwork__info_subtitle">29.04.2024</div>
            </div>
          </div>
          <div className="tasks-complete">
            <div className="tasks-complete__title">Сдано</div>
            <div className={`tasks-complete__info_task1 ${activeTask === 1 ? "active" : ""}`}>
              <div className="tasks-complete__info_title">Составить м...</div>
              <div className="tasks-complete__info_subtitle">10.04.2024</div>
            </div>
            <div className={`tasks-complete__info_task2 ${activeTask === 2 ? "active" : ""}`}>
              <div className="tasks-complete__info_title">Согласовать...</div>
              <div className="tasks-complete__info_subtitle">25.03.2024</div>
            </div>
            <div className={`tasks-complete__info_task2 ${activeTask === 2 ? "active" : ""}`}>
              <div className="tasks-complete__info_title">Разработать ...</div>
              <div className="tasks-complete__info_subtitle">25.03.2024</div>
            </div>
          </div>
          <div className="tasks-lose">
            <div className="tasks-lose__title">Провалено</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
