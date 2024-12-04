import React from 'react';
import { Chart as ChartJs } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

export default function ChartFormation({ data }) {
  return (
    <Bar
      data={{
        labels: data.map((element) => element.name),
        datasets: [
          {
            label: 'Effectif total',
            data: data.map((element) => element.effectif),
            backgroundColor: data.map(
              (_, index) =>
                ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'][index % 5]
            ),
            borderRadius: 10,
          },
        ],
      }}
      options={{
        plugins: {
          legend: { display: true },
        },
      }}
    />
  );
}
