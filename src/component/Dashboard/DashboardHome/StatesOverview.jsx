"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const data = {
  labels: ["Pending", "Completed", "Cancelled"],
  fill: true,
  datasets: [
    {
      label: "Orders",
      data: [10, 15, 7],
      backgroundColor: [ "#FFCE56", "#36A2EB", "#EF233C"],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
    x: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Order Status",
    },
  },
};

const StatesOverview = () => {
  return (
    <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] p-10">
      <Bar data={data} options={options} />
    </div>
  );
};

export default StatesOverview;
