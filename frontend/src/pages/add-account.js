import React, { useState } from "react";
import "../components/add-account.css"; // Import the CSS file
import aarow from "../components/arrow.png"
import { Link } from 'react-router-dom';
import add_circle from '../components/add_circle.png'


const Varad = () => {
  const [accounts, setAccounts] = useState(
    JSON.parse(localStorage.getItem("accounts")) || [
      { name: "main account", balance: "" },
      { name: "account 1", balance: "" },
    ]
  );

  const saveToLocalStorage = (updatedAccounts) => {
    localStorage.setItem("accounts", JSON.stringify(updatedAccounts));
  };

  const handleAddAccount = () => {
    const updatedAccounts = [...accounts, { name: `account ${accounts.length}`, balance: "" }];
    setAccounts(updatedAccounts);
    saveToLocalStorage(updatedAccounts);
  };

  const handleRemoveAccount = (index) => {
    const updatedAccounts = accounts.filter((_, i) => i !== index);
    setAccounts(updatedAccounts);
    saveToLocalStorage(updatedAccounts);
  };

  const handleInputChange = (index, field, value) => {
    const updatedAccounts = [...accounts];
    updatedAccounts[index][field] = value;
    setAccounts(updatedAccounts);
    saveToLocalStorage(updatedAccounts);
  };

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="app-container">
      <header className="header">
        <h1>Let’s get started!</h1>
        <p>Log your account details to start tracking</p>
      </header>

      <div className="form-container">
        <div className="currency-selector">
          <label htmlFor="currency-select" id="text">
            Currency to log your transactions in:
          </label>
          <select id="currency-option" defaultValue="INR">
            <option value="INR">INR ₹</option>
            <option value="USD">USD $</option>
            <option value="EUR">EUR €</option>
          </select>
        </div>
        <div className="accounts-list">
          {accounts.map((account, index) => (
            <div key={index} className="account-card">
              <div className="account-details">
                <div className="name">
                  <input id="name"
                    type="Name"
                    placeholder="             Name"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />

                </div>
                <div className="bank-balance"> bank balance</div>
                <input inputMode="numeric" id="amount"
                  type="number"
                  placeholder="₹______________"
                  value={account.balance}
                  onChange={(e) => handleInputChange(index, "balance", e.target.value)}
                />

              </div>
              {index > 0 && (
                <button
                  onClick={() => handleRemoveAccount(index)}
                  className="remove-button"
                >
                  &#x1F5D1;
                </button>
              )}
            </div>
          ))}

          <button onClick={handleAddAccount} className="add-account-button">
            <img id="plus-icon" src={add_circle} alt="+;"></img> <br />
            Add an account
          </button>
        </div>

        {accounts.map((account, index) => (
          <div key={index} className="account-name">

            {account.name}
            {console.log("Accounts:", accounts)}


          </div>))}


      </div>
      <Link to="/Dashboard">
        <button className="dashboard-btn ">
          go to dashboard <img src={aarow} alt="&rarr;"></img>
        </button>
      </Link>

     
    </div>
  );
};

export default Varad;
