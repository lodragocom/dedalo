// src/components/Dashboard/CategoryChart.jsx
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Registrare i componenti necessari per Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.category),
    datasets: [
      {
        label: "Vendite per Categoria",
        data: data.map((item) => item.sales),
        backgroundColor: ["rgba(75,192,192,0.6)", "rgba(153,102,255,0.6)", "rgba(255,159,64,0.6)"],
      },
    ],
  };

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <Pie data={chartData} />
    </div>
  );
};

export default CategoryChart;
