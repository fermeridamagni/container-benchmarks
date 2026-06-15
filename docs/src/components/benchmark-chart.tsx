import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface BenchmarkChartProps {
  data: {
    name: string;
    docker: number;
    container: number;
  }[];
  title: string;
  yAxisLabel: string;
}

export default function BenchmarkChart({
  data,
  title,
  yAxisLabel,
}: BenchmarkChartProps) {
  return (
    <div className="my-10 flex h-[450px] w-full flex-col rounded-xl border border-gray-200 bg-white p-8 text-gray-900 shadow-sm dark:border-gray-800 dark:bg-black dark:text-gray-100">
      <h3 className="mb-6 text-center font-semibold text-white text-xl">
        {title}
      </h3>
      <div className="min-h-0 flex-1">
        <ResponsiveContainer height="100%" width="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid
              className="dark:stroke-gray-800"
              stroke="#e5e7eb"
              strokeDasharray="3 3"
              vertical={false}
            />
            <XAxis
              axisLine={{ stroke: "currentColor", strokeOpacity: 0.2 }}
              dataKey="name"
              tick={{ fill: "currentColor" }}
              tickLine={false}
              tickMargin={12}
            />
            <YAxis
              axisLine={false}
              label={{
                value: yAxisLabel,
                angle: -90,
                position: "insideLeft",
                fill: "currentColor",
                offset: -10,
              }}
              tick={{ fill: "currentColor" }}
              tickLine={false}
              tickMargin={12}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--sl-color-bg)",
                borderColor: "var(--sl-color-hairline)",
                borderRadius: "0.5rem",
                color: "var(--sl-color-text)",
              }}
              cursor={{ fill: "currentColor", opacity: 0.05 }}
              itemStyle={{ color: "var(--sl-color-text)" }}
            />
            <Legend wrapperStyle={{ paddingTop: "20px" }} />
            <Bar
              dataKey="docker"
              fill="#404040"
              maxBarSize={60}
              name="OrbStack Docker"
              radius={[6, 6, 0, 0]}
            />
            <Bar
              dataKey="container"
              fill="#ffffff"
              maxBarSize={60}
              name="Apple Containers"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
