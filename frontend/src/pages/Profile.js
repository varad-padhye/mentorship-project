import React, { useState } from "react";
import '../components/profile.css'
const  ProfileSettings=()=> {
  const [accounts, setAccounts] = useState([
    { id: 1, name: "", balance: "" },
  ]);

  const handleAddAccount = () => {
    setAccounts([...accounts, { id: accounts.length + 1, name: "", balance: "" }]);
  };

  const handleRemoveAccount = (id) => {
    setAccounts(accounts.filter((account) => account.id !== id));
  };

  const handleAccountChange = (id, field, value) => {
    setAccounts(
      accounts.map((account) =>
        account.id === id ? { ...account, [field]: value } : account
      )
    );
  };

  return (
    <div className="profile-settings-container">
      <header className="header">
        <h1>name/logo</h1>
      </header>

      <main className="main-content">
        <section className="profile">
          <div className="profile-card">
            <div className="profile-info">
              <h2>full name</h2>
              <p>@username</p>
              <p>email</p>
            </div>
            
          </div>
        </section>

        <section className="settings">
          <h2>settings</h2>
          <button className="change-password">Change Password</button>
          <div className="currency-settings">
            <label>Currency for logging transactions</label>
            <select>
              <option value="INR">INR ₹</option>
              <option value="USD">USD $</option>
              <option value="EUR">EUR €</option>
            </select>
          </div>

          <div className="account-details">
            <h3>Account Details</h3>
            {accounts.map((account) => (
              <div className="account" key={account.id}>
                <input
                  type="text"
                  placeholder="Name"
                  value={account.name}
                  onChange={(e) =>
                    handleAccountChange(account.id, "name", e.target.value)
                  }
                />
                <input
                  type="number"
                  placeholder="Balance"
                  value={account.balance}
                  onChange={(e) =>
                    handleAccountChange(account.id, "balance", e.target.value)
                  }
                />
                {account.id !== 1 && (
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveAccount(account.id)}
                  >
                    🗑️
                  </button>
                )}
              </div>
            ))}
            <button className="add-account" onClick={handleAddAccount}>
              + Add an Account
            </button>
          </div>
        </section>

        <section className="contact-us">
          <h3>Contact Us</h3>
          <p>Project description</p>
          <p>Mentor + Mentee names</p>
        </section>
      </main>
    </div>
  );
}
export default ProfileSettings;