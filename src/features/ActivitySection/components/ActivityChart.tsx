import type {ChartPoint} from "@/features/ActivitySection/constants/mockData";
import {chartMockData, chartMeta} from "@/features/ActivitySection/constants/mockData";

const WIDTH = 360;
const HEIGHT = 220;
const PADDING = {top: 16, right: 12, bottom: 36, left: 36};

function getPointCoords(points: ChartPoint[]) {
  const innerW = WIDTH - PADDING.left - PADDING.right;
  const innerH = HEIGHT - PADDING.top - PADDING.bottom;
  const maxY = 100;

  return points.map((point, index) => {
    const x =
      PADDING.left +
      (points.length === 1 ? innerW / 2 : (index / (points.length - 1)) * innerW);
    const y = PADDING.top + innerH - (point.value / maxY) * innerH;
    return {x, y, ...point};
  });
}

/** Build a smooth cubic path through the fake monthly points. */
function buildSmoothPath(coords: {x: number; y: number}[]) {
  if (coords.length < 2) return "";

  let path = `M ${coords[0].x} ${coords[0].y}`;

  for (let i = 0; i < coords.length - 1; i++) {
    const current = coords[i];
    const next = coords[i + 1];
    const cx = (current.x + next.x) / 2;
    path += ` C ${cx} ${current.y}, ${cx} ${next.y}, ${next.x} ${next.y}`;
  }

  return path;
}

interface ActivityChartProps {
  data?: ChartPoint[];
}

export function ActivityChart({data = chartMockData}: ActivityChartProps) {
  const coords = getPointCoords(data);
  const path = buildSmoothPath(coords);
  const innerH = HEIGHT - PADDING.top - PADDING.bottom;

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className="h-auto w-full"
      role="img"
      aria-label="نمودار فعالیت شش‌ماهه"
    >
      <defs>
        <linearGradient id="activity-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F04343" />
          <stop offset="28%" stopColor="#F04343" />
          <stop offset="45%" stopColor="#22C55E" />
          <stop offset="62%" stopColor="#22C55E" />
          <stop offset="82%" stopColor="#F04343" />
          <stop offset="100%" stopColor="#F04343" />
        </linearGradient>
      </defs>

      {chartMeta.yTicks.map((tick) => {
        const y = PADDING.top + innerH - (tick / 100) * innerH;
        return (
          <g key={tick}>
            <line
              x1={PADDING.left}
              y1={y}
              x2={WIDTH - PADDING.right}
              y2={y}
              stroke="#E8EBF2"
              strokeWidth={1}
            />
            <text
              x={PADDING.left - 10}
              y={y + 4}
              textAnchor="end"
              className="fill-slate-400"
              style={{fontSize: 11}}
            >
              {tick}
            </text>
          </g>
        );
      })}

      <path
        d={path}
        fill="none"
        stroke="url(#activity-line-gradient)"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {coords.map((point) => (
        <text
          key={point.month}
          x={point.x}
          y={HEIGHT - 10}
          textAnchor="middle"
          className="fill-slate-500"
          style={{fontSize: 11}}
        >
          {point.month}
        </text>
      ))}
    </svg>
  );
}
