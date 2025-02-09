import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { name: "food", value: 4000 },
  { name: "travel", value: 7822 },
  { name: "utilities", value: 3000 },
  { name: "education", value: 6000 },
  { name: "health", value: 2000 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const percentage = ((payload[0].value / 7822) * 100).toFixed(0); // Replace 7822 with the max value
    return (
      <div style={{ backgroundColor: "#fff", padding: "8px", borderRadius: "25px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
        <p>{label}</p>
        <p>₹ {payload[0].value} | {percentage}%</p>
      </div>
    );
  }
  return null;
};

const ExpenditureChart = () => {
  return (
    <div style={{ width: "100%", height: 400, backgroundColor: "#F1EFE3", padding: "16px", borderRadius: "25px" }}>
      <h3 style={{ marginBottom: "16px", fontSize: "18px", color: "#333" }}>Category Wise Expenditures</h3>
      <BarChart
        width={400}
        height={300}
        data={data}
        layout="vertical"
        margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
      >
        
        <XAxis type="number" hide />
        <YAxis type="category" dataKey="name" />
       
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="value" fill="#333" radius={[10, 10, 10, 10]} />
      </BarChart>
    </div>
  );
};

export default ExpenditureChart;
