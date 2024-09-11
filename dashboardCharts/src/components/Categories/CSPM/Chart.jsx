import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart() {
  const state = {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [
      {
        data: [2000, 3000, 1000, 5000, 1500],
        backgroundColor: [
          '#D4F1F4',
          '#75E6DA',
          '#A0E7E5',
          '#FFAEBC',
          '#B4F8C8',
        ],
        hoverBorderColor: [
          '#D4F1F4',
          '#75E6DA',
          '#A0E7E5',
          '#FFAEBC',
          '#B4F8C8',
        ],
        hoverBackgroundColor: [
          '#D4F1F4',
          '#75E6DA',
          '#A0E7E5',
          '#FFAEBC',
          '#B4F8C8',
        ],
        hoverBorderWidth: 5,
        offset: 30,
        borderRadius: 10,
      },
    ],
  };
  const options = {
    cutoutPercentage: 60,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
      tooltip: {
        callbacks: {
          title: (items, data) => {
            let x = Math.ceil(
              data.datasets[items[0].datasetIndex].data[items[0].index]
            );
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
          },
          label: (items, data) => data.labels[items.index],
        },
        backgroundColor: '#FFF',
        borderColor: 'rgb(0,0,0)',
        titleFontSize: 14,
        titleFontColor: '#000',
        bodyFontColor: '#000',
        bodyFontSize: 10,
        displayColors: false,
      },
    },
  };
  return (
    <div className='Chart'>
      <div className='chart'>
        <Doughnut data={state} options={options} />
      </div>
    </div>
  );
}
