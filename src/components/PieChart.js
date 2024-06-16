import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Регистрируем необходимые компоненты
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Документация', 'Бизнес процессы', 'Разработка', 'Оставшийся бюджет'],
    datasets: [
      {
        data: [50000, 50000, 150000, 400000 - 50000 - 50000 - 150000],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#D3D3D3'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#D3D3D3'],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 18, // Размер шрифта для легенды
          },
        },
      },
      tooltip: {
        bodyFont: {
          size: 20, // Размер шрифта для подсказок
        },
        titleFont: {
          size: 20, // Размер шрифта для заголовка подсказок
        },
      },
    },
    scales: {
      // Настройки осей, если они есть (не обязательно для PieChart)
    },
  };

  return (
    <div style={{ width: '400px', height: '400px' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
