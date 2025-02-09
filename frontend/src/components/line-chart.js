import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { name: "Jan", mainAccount: 40, account1: 20 },
  { name: "Feb", mainAccount: 50, account1: 30 },
  { name: "Mar", mainAccount: 45, account1: 25 },
  { name: "Apr", mainAccount: 60, account1: 35 },
  { name: "May", mainAccount: 70, account1: 50 },
  { name: "Jun", mainAccount: 85, account1: 60 },
  { name: "Jul", mainAccount: 75, account1: 55 },
  { name: "Aug", mainAccount: 90, account1: 65 },
  { name: "Sep", mainAccount: 100, account1: 75 },
  { name: "Oct", mainAccount: 95, account1: 70 },
  { name: "Nov", mainAccount: 110, account1: 80 },
  { name: "Dec", mainAccount: 120, account1: 90 },
];

const LineChartComponent = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(value) => `${value} k`} /> {/* Adds "k" to Y-axis values */}
        <Tooltip formatter={(value) => `${value} k`} />
        
        <Legend verticalAlign="top"/>
        <Line
          type="monotone"
          dataKey="mainAccount"
          stroke="#005f5f"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="account1" stroke="#71c7c7" />
      </LineChart>
    </div>
  );
};

export default LineChartComponent;
