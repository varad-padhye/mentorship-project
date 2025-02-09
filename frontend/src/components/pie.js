import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import './pie.css';



const creditData = [
  { name: "income", value: 400 },
  { name: "gift", value: 300 },
  { name: "others", value: 800 },
];

const debitData = [
  { name: "food", value: 1200 },
  { name: "travel", value: 600 },
  { name: "shoping", value: 400 },
  { name: "utilities", value: 1400 },
  { name: "leisure", value: 40 },
  { name: "health", value: 340 },
  { name: "educatiom", value: 500 },
  { name: "gift", value: 100 },
  { name: "others", value: 600 },
  

];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];


const Pie_Chart = () => {

  const [data, setData] = useState(creditData);
  
  const [color, setColor] = useState("#037171");
  const [colors, setColors] = useState("#F8F7F2");
  
  const handleButtonClick = (type) => {

    
    
    
    
    if (type === "credit") {
      setData(creditData);
      setColor((prevColor) =>
        prevColor === "#037171" ? "#F8F7F2" : "#037171"
      );
      setColors((prevColors) =>
        prevColors === "#F8F7F2" ? "#037171" : "#F8F7F2"
      );
      
    } else if (type === "debit") {
      setData(debitData);
      setColors((prevColors) =>
        prevColors === "#F8F7F2" ? "#037171" : "#F8F7F2"
      );
      setColor((prevColor) =>
        prevColor === "#037171" ? "#F8F7F2" : "#037171"
      );
    }
  };
    
  
  
  return (
    <div className="pie-container">
      <div className="piechart-button">
        <button onClick={() => handleButtonClick("credit")}
        style={{
          backgroundColor: color,
          color: "black",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        id="credit">
          credit
          
         </button>
        <button onClick={() => handleButtonClick("debit")}
         style={{
          backgroundColor: colors,
           color: "black",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          
        }}
        id="debit">
          debit
            
        </button>
      </div>
      <div className="pie">
        {/* Pie Chart */}
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          verticalAlign="bottom" // Place the legend at the bottom
          height={130} // Reduce legend height to save space
          wrapperStyle={{ paddingTop: "0px", marginTop: "-10px" }} // Reduce spacing
        />
      </PieChart>
      </div>
      

    </div>

  );
};

export default Pie_Chart;
