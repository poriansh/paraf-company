"use client";

import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  type ChartData,
  type ChartOptions,
  type ScriptableContext,
} from "chart.js";
import {Line} from "react-chartjs-2";

import type {ChartPoint} from "@/features/ActivitySection/constants/mockData";
import {chartMockData} from "@/features/ActivitySection/constants/mockData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
);

interface ActivityChartProps {
  data?: ChartPoint[];
}

function createLineGradient(context: ScriptableContext<"line">) {
  const {chart} = context;
  const {ctx, chartArea} = chart;
  if (!chartArea) return "#F04343";

  const gradient = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
  gradient.addColorStop(0, "#F04343");
  gradient.addColorStop(0.28, "#F04343");
  gradient.addColorStop(0.45, "#22C55E");
  gradient.addColorStop(0.62, "#22C55E");
  gradient.addColorStop(0.82, "#F04343");
  gradient.addColorStop(1, "#F04343");
  return gradient;
}

export function ActivityChart({data = chartMockData}: ActivityChartProps) {
  const chartData: ChartData<"line"> = {
    labels: data.map((point) => point.month),
    datasets: [
      {
        data: data.map((point) => point.value),
        borderColor: createLineGradient,
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#22C55E",
        pointHoverBorderColor: "#ffffff",
        pointHoverBorderWidth: 2,
        fill: false,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {display: false},
      tooltip: {
        rtl: true,
        titleFont: {family: "inherit", size: 12},
        bodyFont: {family: "inherit", size: 12},
        displayColors: false,
        callbacks: {
          label: (item) => `${item.parsed.y ?? 0}`,
        },
      },
    },
    scales: {
      x: {
        grid: {display: false},
        border: {display: false},
        ticks: {
          color: "#64748B",
          font: {size: 11, family: "inherit"},
          padding: 8,
        },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          color: "#94A3B8",
          font: {size: 11, family: "inherit"},
          padding: 8,
        },
        grid: {
          color: "#E8EBF2",
          drawTicks: false,
        },
        border: {display: false},
      },
    },
  };

  return (
    <div
      className="relative h-44 w-full sm:h-50 md:h-55"
      role="img"
      aria-label="نمودار فعالیت شش‌ماهه"
    >
      <Line data={chartData} options={options} />
    </div>
  );
}
