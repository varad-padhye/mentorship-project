import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import "./topbar.css";
import { useState } from "react";
const monthlyData = [
    { month: "jul", year: "2023", expenditure: 17000 ,target:30000},
    { month: "aug", year: "2023", expenditure: 20000 ,target:30000},
    { month: "sep", year: "2023", expenditure: 15000 ,target:30000},
    { month: "oct", year: "2023", expenditure: 22000 ,target:30000},
    { month: "nov", year: "2023", expenditure: 29000 ,target:30000},
    { month: "dec", year: "2023", expenditure: 25000 ,target:30000},
    { month: "jan", year: "2024", expenditure: 17927 ,target:30000},
];





const ProgressBar = ({ value, goal }) => {
    const percentage = ((value / goal) * 100).toFixed(2);



    return (
        <div style={{ margin: "16px 0", position: "absolute", bottom: "35px", width: "800px" }}>
            <div style={{ display: "flex", justifyContent: "left", marginBottom: "8px", marginRight: "8px" }}>
                <span style={{ fontSize: "14px", color: "#333", marginRight: "10px" }}>₹ {value}</span>
                <span style={{ fontSize: "14px", color: "#333", justifyContent: "center", textAlign: "center", marginLeft: "100px" }}>{percentage} %</span>
            </div>
            <div
                style={{
                    backgroundColor: "#e0e0e0",
                    height: "12px",
                    width: "50%",
                    borderRadius: "6px",
                    position: "relative",
                    overflow: "hidden",


                }}
            >
                <div
                    style={{
                        backgroundColor: "#0077FF",
                        width: `${percentage}%`,
                        height: "100%",
                        borderRadius: "6px",
                        transition: "width 0.3s ease",

                    }}
                ></div>
            </div>
        </div>
    );
};

const ExpenditureCard = () => {

    
        const [value, setValue] = useState("30000");
      
        const handleInputChange = (e) => {
          const numericValue = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
          setValue(numericValue);
        };
    
    
    return (
        <div
            id="excontainer"
        >
            <h3 style={{ fontSize: "18px", marginBottom: "12px" }}>Set Monthly Expenditure Goal</h3>

            {/* Header Section */}
            <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
                <div
                    style={{
                        padding: "0px 12px",
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        fontSize: "16px",
                        fontWeight: "500",
                        marginRight: "12px",
                    }}
                >
                    January
                </div>
                <div style={{ fontSize: "16px", fontWeight: "600" }}>

                    <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
                        {/* Currency Symbol */}
                        <span
                            style={{
                                fontSize: "24px",
                                fontWeight: "bold",
                                marginRight: "8px",
                                color: "#333",
                            }}
                        >
                            ₹
                        </span>

                        {/* Input Field */}
                        <input
                            type="text"
                            value={value.toLocaleString("en-IN")} // Format as Indian currency
                            onChange={handleInputChange}
                            placeholder="0"
                            style={{
                                border: "none",
                                borderBottom: "2px solid #000",
                                width:"100px",
                                outline: "none",
                                fontSize: "24px",
                                // fontWeight: "bold",
                                textAlign: "left",
                                color: "#333",
                                backgroundColor: "transparent",
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Progress Bar */}
            <ProgressBar value={17927} goal={30000} />

            {/* Bar Chart */}
            <div id="upbar">

                <BarChart
                    width={1000}
                    height={100}
                    data={monthlyData}
                    margin={{ top: 0, right: 100, left: 520, bottom: 5 }}
                >

                    <XAxis dataKey="month" />
                    {/* <YAxis /> */}
                    <Tooltip formatter={(value) => `₹ ${value}`} />
                    <Bar dataKey="expenditure" fill="#333" barSize={15}  stackId="a" radius={[0, 0, 0, 0]}/>
                    <Bar dataKey="target"  fill="#F1EFE3" barSize={15} radius={[40, 40, 0, 0]} stackId="a" />
                </BarChart>

            </div>

        </div>
    );
};

export default ExpenditureCard;
