// src/components/BloodPressureChart.jsx

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BloodPressureChart = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
      },
    },
  };

  const chartData = {
    labels: data.map((d) => d.date),
    datasets: [
      {
        label: "Systolic",
        data: data.map((d) => d.systolic),
        borderColor: "#FF69B4",
        backgroundColor: "#FF69B4",
      },
      {
        label: "Diastolic",
        data: data.map((d) => d.diastolic),
        borderColor: "#4169E1",
        backgroundColor: "#4169E1",
      },
    ],
  };

  return (
    <div className="bg-white mt-10 p-6 rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Blood Pressure</h3>
        <select className="border rounded-md px-2 py-1">
          <option>Last 6 months</option>
        </select>
      </div>
      <Line options={options} data={chartData} />
    </div>
  );
};

export default BloodPressureChart;
