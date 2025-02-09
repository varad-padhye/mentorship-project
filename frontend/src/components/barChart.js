

import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import './bar.css';

const data = [
  { name: "main account", debited: 56000, credited: 36000 },
  { name: "account 1", debited: 78000, credited: 57000 },
  { name: "cash", debited: 35000, credited: 22000 },
];

function Barchart() {
  return (
    <div className="p-4">
      <BarChart
        width={400}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="debited" fill="#E53E3E" barSize={30} radius={[10, 10, 0, 0]} />
        <Bar dataKey="credited" fill="#38A169" barSize={30} radius={[10, 10, 0, 0]} />
      </BarChart>
    </div>
   
  );
}

export default Barchart;