import React from 'react';
import {
  ResponsiveContainer,
  LineChart ,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const chartData = [
  { month: 'January', sales: 186, profit: 80 },
  { month: 'February', sales: 305, profit: 200 },
  { month: 'March', sales: 237, profit: 120 },
  { month: 'April', sales: 73, profit: 190 },
  { month: 'May', sales: 209, profit: 130 },
  { month: 'June', sales: 214, profit: 140 },
];

const LineDemoChart = () => {
  return (
    <div className="w-full h-[300px] shadow-md">
      <ResponsiveContainer>
        <LineChart
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 10,
            bottom: 5,
          }}
        >
          {/* Grid with only horizontal lines */}
          <CartesianGrid vertical={false} strokeDasharray="3 3" />

          {/* X-Axis with minimal ticks */}
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            tickFormatter={(value) => value.slice(0, 3)} // Shorten month names
            style={{ fontSize: 12, fill: '#9CA3AF' }}
          />

          {/* Legend at the top */}
          <Legend
            verticalAlign="top"
            wrapperStyle={{
              paddingBottom: '10px',
            }}
          />

          {/* Tooltip with simple style */}
          <Tooltip
            cursor={{ strokeDasharray: '3 3' }}
            contentStyle={{
              borderRadius: '5px',
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              padding: '10px',
            }}
            labelStyle={{
              color: '#555',
              fontWeight: 'bold',
            }}
          />

          {/* Sales line */}
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#1B4DFF"
            strokeWidth={2}
            dot={false}
          />

          {/* Profit line */}
          <Line
            type="monotone"
            dataKey="profit"
            stroke="#FF3838"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineDemoChart;

