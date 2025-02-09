import LineChartComponent from "../components/line-chart";
import React from "react";
import "../components/stats.css";

import ExpenditureCard from "../components/topbar";
import ExpenditureChart from "./customBarchart";
const Stats = () => {
    console.log("Stats component is rendering...");
    return (
       
            
            <div className="stats-container">
                <div className="customBarchart">
                    <ExpenditureChart/>
                </div>
                <div className="expenditure">
                    <ExpenditureCard/>
                </div>

                <div className="stats-header">
                    <div className="total-bankBalance">
                        total bank balance
                    </div>
                    <div className="year">
                        <select id="year" defaultValue="2024">
                            <option value="2024"> 2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                        </select>
                    </div>
                </div>
                <div className="statschart">
                    <LineChartComponent />
                </div>

            </div>
      

    );
};

export default Stats;